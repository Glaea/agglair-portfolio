document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  const title = document.querySelector('.brand');
  // Letter animation
  const letters = title.textContent.split('');
  title.textContent = '';
  letters.forEach(c => title.innerHTML += `<span>${c}</span>`);
  gsap.from('.brand span', {y:50,opacity:0,skewY:7,stagger:.1,duration:.8,ease:'power2.out'});
  // Particle init
  particlesJS('particles-js', {
    particles: {
      number:{value:80,density:{enable:true,value_area:800}},
      color:{value:['#61dafb','#ffffff']},shape:{type:'circle'},
      opacity:{value:0.5,anim:{enable:true,speed:1}},
      size:{value:3,random:true},
      line_linked:{enable:true,distance:150,color:'#ffffff',opacity:0.4,width:1},
      move:{enable:true,speed:1,out_mode:'out'}
    },
    interactivity:{detect_on:'canvas',events:{onhover:{enable:true,mode:'repulse'},onclick:{enable:true,mode:'push'}}},
    retina_detect:true
  });
  // Tabs and panel animations
  tabs.forEach(btn => btn.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    panels.forEach(p => {
      p.classList.toggle('active', p.id === btn.dataset.target);
      if (p.classList.contains('active')) animateSection(p);
    });
  }));
  function animateSection(panel) {
    gsap.to(panel, {autoAlpha:1,y:0,duration:1,ease:'elastic.out(1,0.5)'});
    panel.querySelectorAll('.card').forEach((c,i)=>gsap.to(c,{autoAlpha:1,y:0,delay:0.3+i*.2,duration:.8}));
    panel.querySelectorAll('.gallery-grid img').forEach((img,i)=>gsap.to(img,{autoAlpha:1,scale:1,delay:0.4+i*.1,duration:.6}));
  }
  animateSection(document.querySelector('#about'));
});
