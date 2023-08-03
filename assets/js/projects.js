let projectSection = document.getElementById('project-section');
const projects = [
    {
    id: 1,
    title: 'Personal Profile',
    img: './assets/images/desktop_tablet_mobile.png',
    desc: 'HTML, Cascading Style Sheet (CSS), and JavaScript were utilzed to make this site.',
    paragraphone: `HTML, CSS, and JavaScript were used to develop this website. This was my first <em>stack</em> project during WebFundamentals while enrolled in the <a href="https://www.codingdojo.com"><span class="site-link">Coding Dojo</span></a> Full Stack program.`,
    paragraphtwo: `At the end of each stack, each student is encouraged to create and complete a project using the industry standard <em>agile</em> method as a guide.`, 
    paragraphthree: `This project gave me the opportunity to exercise many of the concepts that I learned in the three weeks prior to developing this site.`,
    website: 'url(http://localhost:8000)'
},
// {
//     id: 2,
//     title: 'Flask-chat-app',
//     img: './assets/images/desktop_tablet_mobile.png',
//     desc: '',
//     website: 'url(http://localhost:8000)'
// },
// {
//     id: 3,
//     title: 'Potter Universe',
//     img: './assets/images/desktop_tablet_mobile.png',
//     desc: '',
//     website: 'url(http://localhost:8000)'
// },
]

console.log(projects.sort(project => `${project.id}`));

function displayProjects(items){
    let displayItems = items.map( function(item) {
        return`
        <div  id="project-section" class="project-content-wrapper">
            <div  class="project-desc-1">
                    <h3><a href="#"><span class="site-link">${item.title}</span>  </a>Site</h3>
                    <p>${item.desc}</p>
                    <div class="learn-section-1">
                        <div class="learn-panel-1">
                            <h4>Learn more</h4>
                            <button type="button" id="btn-learn-panel" class="chevron" onclick="toggleLearnPanel(this)">&and;</button>
                        </div>
                        <p id="project-desc" class="hide-panel">
                            <span class="paragraph">${item.paragraphone}</span>
                            <span class="paragraph">${item.paragraphtwo}</span>
                            <span class="paragraph">${item.paragraphthree}</span>
                        </p>
                    </div>
                </div>
                <div class="projectImage-section">
                    <img src="${item.img}" alt="photo of project" class="project-img">
                </div>
        </div>
        `;
    });
    displayItems = displayItems.join('');
    projectSection.innerHTML = displayItems;
}

displayProjects(projects);