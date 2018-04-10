"use strict";
{
  const forbidden = new Set(["Facebook", "Zuckerberg", "Trump", "alt-left", "Syria", "Trump's", "racist", "liberal", "alt-right"]);
  const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); const actions = [];
  while( tw.nextNode() ) {
    const text = tw.currentNode;
    if ( text.parentElement.tagName !== 'SCRIPT' && text.parentElement.tagName !== 'STYLE' ) {
      actions.push( () => redact( text, forbidden )); 
    }
  }; 
  
  actions.forEach( a => a() );
  const overlay = document.querySelector('rdctdoverlay');
  overlay.remove();
  
  function redact( t, e ) {
    const p = t.parentElement;
    if ( ! p ) {
      return;
    }
    const converted = t.textContent.split(/\s/g).map( word => {
      if ( e.has(word) ) {
        const s = document.createElement('span');
        s.style = "color:black;background:black;";
        s.innerText = word + " ";
        return s;
      } else return word + " ";
    });
    t.replaceWith( ...converted );
    p.normalize();
  }
}
