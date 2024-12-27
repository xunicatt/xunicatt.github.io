/* ROUTER LOADS AN NEW PAGE */
function router() {
    switch(ENV.page) {
        case "home":
            Home();
            break;

        case "aboutme":
            AboutMe();
            break;

        default:
            ENV.visitedPages.pop();
            console.log(`undefined page: ${ENV.page}`);
            alert("Docs page is not ready")
    }
}
