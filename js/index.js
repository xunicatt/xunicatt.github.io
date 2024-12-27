/* ROUTER LOADS AN NEW PAGE */
function router() {
    switch(ENV.page) {
        case "home":
            Home();
            break;

        case "aboutme":
            AboutMe();
            break;

        case "docs":
            alert("Docs page is not ready")
        
        default:
            ENV.visitedPages.pop();
            console.log(`undefined page: ${ENV.page}`);
    }
}
