document.addEventListener('DOMContentLoaded', () => {
  const blob = document.querySelector('.cursor-blob');
  window.addEventListener('mousemove', e => gsap.to(blob, {
    x: e.clientX, y: e.clientY, duration: 0.2
  }));

  particlesJS('particles-js', {
    particles: {
      number:{value:80,density:{enable:true,value_area:800}},
      color:{value:['#e6c462','#ffffff']},
      shape:{type:'circle'},
      opacity:{value:0.5,anim:{enable:true,speed:1}},
      size:{value:3,random:true},
      line_linked:{enable:true,distance:150,color:'#e6c462',opacity:0.4,width:1},
      move:{enable:true,speed:1,out_mode:'out'}
    },
    interactivity:{detect_on:'canvas',events:{onhover:{enable:true,mode:'repulse'},onclick:{enable:true,mode:'push'}}},
    retina_detect:true
  });

  const title = document.querySelector('.brand');
  const letters = title.textContent.split('');
  title.innerHTML = letters.map(l => `<span>${l}</span>`).join('');
  gsap.from('.brand span', {
    opacity: 0, y: 40, skewY: 10, stagger: 0.05, duration: 1, ease: 'power4.out'
  });

  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach(btn => btn.addEventListener('click', () => {
    tabs.forEach(t => t.classList.toggle('active', t === btn));
    panels.forEach(p => {
      const show = p.id === btn.dataset.target;
      p.classList.toggle('active', show);
      if (show) animateSection(p);
    });
  }));

  function animateSection(panel) {
    gsap.fromTo(panel, {
      autoAlpha: 0, y: 40
    }, {
      autoAlpha: 1, y: 0, duration: 1.2, ease: 'elastic.out(1, 0.5)'
    });

    gsap.utils.toArray(panel.querySelectorAll('.card, .gallery-grid img')).forEach((el, i) => {
      gsap.fromTo(el, {
        autoAlpha: 0, y: 20
      }, {
        autoAlpha: 1, y: 0, delay: .2 + i * .1, duration: .8, ease: 'power2.out'
      });
    });
  }

  animateSection(document.querySelector('#about'));
});
