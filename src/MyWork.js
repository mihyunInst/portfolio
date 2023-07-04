export default function MyWork() {

    const handlerCategory = (e) => {
        const projectContainer = document.querySelector('.work__projects');
        const projects = document.querySelectorAll('.project');
        const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
        if(filter == null){
            return;
        }

        const active = document.querySelector('.category__btn.selected');
        active.classList.remove('selected');
        e.target.classList.add('selected');

        projectContainer.classList.add('anim-out');
        setTimeout(() => {
          projects.forEach((project) => {
            if(filter === 'all' || filter === project.dataset.type) {
              project.classList.remove('invisible');
            }else{
              project.classList.add('invisible');
            }
          });
          projectContainer.classList.remove('anim-out');
        }, 300);
    }

    return (
        <div>
            <section id="work" className="section">
                <div className="section__container">
                    <h1>Projects</h1>
                    <div className="work__categories" onClick={handlerCategory}>
                        <button className="category__btn selected" data-filter="all">All</button>
                        <button className="category__btn" data-filter="frontEnd">Front End</button>
                        <button className="category__btn" data-filter="backEnd">Back End</button>
                    </div>
                    <div className="work__projects">

                        <a href="https://github.com/codestates/Senna-client" className="project" target="blank" data-type="frontEnd">
                        <img src="imgs/projects/Senna.png" alt="Senna" className="project__img" />
                        <div className="project__description">
                            <h3>Senna</h3>
                            <span>여행 사진 공유 웹 앱<br />React, Redux, JavaScript,<br /> Styled-Components</span>
                        </div>
                        </a>
                        <a href="https://github.com/codestates/SIMSIMAE-client" className="project" target="blank" data-type="frontEnd">
                        <img src="imgs/projects/Simsimae.png" alt="Simsimae" className="project__img" />
                        <div className="project__description">
                            <h3>SIMSIMAE</h3>
                            <span>랜덤 QR 생성기<br />React, React-Hooks, JavaScript</span>
                        </div>
                        </a>

   
                        <a href="https://github.com/mihyunInst/InfinitPhotoAlbum" className="project" target="blank" data-type="frontEnd">
                        <img src="imgs/projects/photoAlbum.png" alt="photoAlbum" className="project__img" />
                        <div className="project__description">
                            <h3>PhotoAlbum</h3>
                            <span>무한스크롤 포토앨범<br />React, React-Hooks, JavaScript</span>
                        </div>
                        </a>

                        <a href="https://github.com/hold1593/github-clone" className="project" target="blank" data-type="frontEnd">
                        <img src="imgs/projects/github_po2.png" alt="GitHub" className="project__img" />
                        <div className="project__description">
                            <h3>GitHub Site</h3>
                            <span>GitHub 클론 코딩<br />HTML, CSS</span>
                        </div>
                        </a>
                        <a href="https://github.com/hold1593/youtube-clone" className="project" target="blank" data-type="frontEnd">
                        <img src="imgs/projects/youtube-po2.png" alt="Youtube" className="project__img" />
                        <div className="project__description">
                            <h3>YouTube Site</h3>
                            <span>YouTube 클론 코딩<br />HTML, CSS</span>
                        </div>
                        </a>
                        <a href="https://github.com/hold1593/WassupSeoul" className="project" target="blank" data-type="backEnd">
                        <img src="imgs/projects/wassup-po4.png" alt="Wassup" className="project__img" />
                        <div className="project__description">
                            <h3>Wassup,Seoul</h3>
                            <span>오프라인 모임 커뮤니티<br />HTML, CSS, JavaScript, <br />Java, Spring, OracleDB</span>
                        </div>
                        </a>
                        <a href="https://github.com/hold1593/AppoProject" className="project" target="blank" data-type="backEnd">
                        <img src="imgs/projects/appo_po3.png" alt="Appo" className="project__img" />
                        <div className="project__description">
                            <h3>Appo</h3>
                            <span>Apple 기기 중고 거래 사이트<br />HTML, CSS, JavaScript, <br /> Java, OracleDB</span>
                        </div>
                        </a>

                        <a href="https://github.com/mihyunInst/HairSalonBill" className="project" target="blank" data-type="frontEnd">
                        <img src="imgs/projects/bill.png" alt="bill" className="project__img" />
                        <div className="project__description">
                            <h3>Bill</h3>
                            <span>실시간 계산기<br />React, React-Hooks, JavaScript</span>
                        </div>
                        </a>
                     

                        <a href="https://github.com/mihyunInst/Towngram" className="project" target="blank" data-type="backEnd">
                        <img src="imgs/projects/towngram.png" alt="towngram" className="project__img" />
                        <div className="project__description">
                            <h3>Towngram</h3>
                            <span>텍스트 커뮤니티<br />React, React-Hooks, JavaScript, <br />Java, Spring, OracleDB</span>
                        </div>
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}