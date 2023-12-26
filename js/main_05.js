const categories = document.querySelector('.category');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', (event) => {
    // console.log(event);
    /**화면에 있는 버튼 클릭한 뒤 콘솔 화면 확인 */
    //console.log는 콘솔 로그 개발자 창에 뜨도록 지시한 내용
    //(event)는 발생한 이벤트를 콘솔 로그에 작성하도록 하는 내용

    const filter = event.target.dataset.category;
    // console.log(filter);
    /**화면에 있는 버튼 클릭 후 콘솔화면 확인 */

    projects.forEach((project) => {
        console.log(project.dataset.type);

        
    if (filter === 'all' || filter === project.dataset.type){
        project.style.display = 'block';
    } else {
        project.style.display = 'none';
    }

    if (filter == null) {
        return;
    }
    })

})