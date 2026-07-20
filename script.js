// header
class THeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
        
          <a href="person.html">person</a>
          <a href="writer.html">writer</a>
          <a href="architect.html">architect</a>
          
          <a href="index.html"><img class="logo" src="handwriting.svg" /></a>

          <a href="award.html">award.winner</a>
          <a href="tele.html">telephonist</a>
          <a href="where.html">whereabouts</a>
        </nav>
      </header>
    `;
  }
}
customElements.define("t-header", THeader);

// section
class TSection extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const details = this.getAttribute("details");
    const link = this.getAttribute("link");
    const linkText = this.getAttribute("linkText");
    const img = this.getAttribute("img");
    const heading2 = this.getAttribute("heading2");
    const details2 = this.getAttribute("details2");
    const link2 = this.getAttribute("link2");
    const linkText2 = this.getAttribute("linkText2");
    const img2 = this.getAttribute("img2");

    this.innerHTML = `
      <section class="flex margin6">
        <div>
          <h2>${heading}</h2>
          <p>${details}</p>
          <a class="btn" href="${link}">${linkText}</a>
        </div>
        <img src="${img}"/>
      </section>
      <section class="flex margin6 reverse">
        <div>
          <h2>${heading2}</h2>
          <p>${details2}</p>
          <a class="btn" href="${link2}">${linkText2}</a>
        </div>
        <img src="${img2}"/>
      </section>
    `;
  }
}
customElements.define("t-section", TSection);

// main section
class TMainSection extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const details = this.getAttribute("details");

    this.innerHTML = `
      <div class="main-section">
        <h2>${heading}</h2>
        <p>${details}</p>
      </div>
    `;
  }
}
customElements.define("t-main-section", TMainSection);

// CTA
class TCTA extends HTMLElement {
  connectedCallback() {
    const heading = this.getAttribute("heading");
    const details = this.getAttribute("details");
    const linkText = this.getAttribute("linkText");
    const link = this.getAttribute("link");

    this.innerHTML = `
      <section class="center padding6">
        <h2>${heading}</h2>
        <p>${details}</p>
        <a href="${link}" class="btn">${linkText}</a>
      </section>
    `;
  }
}
customElements.define("t-cta", TCTA);

// footer
class TFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      
        <div class="footer">
        
          <div class="footer-left">
            <p>
              The areas of consensus shift unbelievably fast; the bubbles of certainty are constantly exploding.
            </p>
          </div>
         
          <div class="footer-right">
          <p>
              somewhere in europe <br />
              don't call <br />
              kool@rabbit.eu
            </p>
            </div>
            
             
          <div class="footer-right">  
             <a href="imprint.html"><p>imprint</p></a>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define("t-footer", TFooter);

// hamburger
const ham = document.querySelector(".ham");
const nav = document.querySelector("nav");
ham.addEventListener("click", toggle);
nav.addEventListener("click", toggle);
function toggle() {
  ham.src = ham.src.includes("img/ham-close.svg")
    ? "img/ham-open.svg"
    : "img/ham-close.svg";
  nav.classList.toggle("show");
}