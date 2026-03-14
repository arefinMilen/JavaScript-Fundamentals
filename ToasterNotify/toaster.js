class Toast {
  constructor() {
    this.toasts = [];
    this.container = document.getElementById("toast-container");
  }

  show(title, message, type = "info", duration = 4000) {
    const toastId = Date.now();

    // Define styles for different toast types
    const styles = {
      success: {
        bg: "bg-green-500",
        icon: "✓",
        border: "border-green-600",
      },
      error: {
        bg: "bg-red-500",
        icon: "✕",
        border: "border-red-600",
      },
      warning: {
        bg: "bg-yellow-500",
        icon: "⚠",
        border: "border-yellow-600",
      },
      info: {
        bg: "bg-blue-500",
        icon: "ℹ",
        border: "border-blue-600",
      },
    };

    const style = styles[type] || styles.info;

    // Create toast element
    const toast = document.createElement("div");
    toast.id = `toast-${toastId}`;
    toast.className = `${style.bg} text-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out opacity-0 translate-x-full`;

    toast.innerHTML = `
      <div class="flex items-start p-4 gap-3 border-l-4 ${style.border}">
        <div class="flex-shrink-0 text-xl font-bold flex items-center justify-center w-8 h-8">
          ${style.icon}
        </div>
        <div class="flex-1">
          <h3 class="font-semibold text-sm">${title}</h3>
          <p class="text-xs opacity-90 mt-1">${message}</p>
        </div>
        <button onclick="toast_${toastId}.remove()" class="flex-shrink-0 ml-2 hover:opacity-75 transition-opacity">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div class="h-1 bg-black bg-opacity-10">
        <div class="h-full bg-black bg-opacity-20 animate-shrink" style="animation: shrink ${duration}ms linear forwards;"></div>
      </div>
    `;

    this.container.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
      toast.classList.remove("opacity-0", "translate-x-full");
      toast.classList.add("opacity-100", "translate-x-0");
    }, 10);

    // Add to toasts array
    const toastObj = {
      id: toastId,
      element: toast,
      remove: () => this.removeToast(toastId),
    };

    this.toasts.push(toastObj);

    // Auto remove after duration
    setTimeout(() => {
      this.removeToast(toastId);
    }, duration);

    return toastObj;
  }

  removeToast(toastId) {
    const toast = document.getElementById(`toast-${toastId}`);
    if (toast) {
      toast.classList.add("opacity-0", "translate-x-full");
      setTimeout(() => {
        toast.remove();
        this.toasts = this.toasts.filter((t) => t.id !== toastId);
      }, 300);
    }
  }
}

// Initialize toast instance
const toastNotifier = new Toast();

// Add shrink animation to stylesheet
const style = document.createElement("style");
style.textContent = `
  @keyframes shrink {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`;
document.head.appendChild(style);

// Global function to show toasts
function showToast(title, message, type = "info") {
  toastNotifier.show(title, message, type);
}
