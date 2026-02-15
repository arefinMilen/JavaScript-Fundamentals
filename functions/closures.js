let parent = ()=> {
    let a = 11
    return ()=> {
        console.log(a)
    }
}
(parent())()