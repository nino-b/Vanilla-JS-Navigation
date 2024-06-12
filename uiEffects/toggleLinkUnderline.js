

export default function toggleLinkUnderline(linkGroup, activeLink) {
  linkGroup.forEach(link => {
    if (link === activeLink && link.dataset.active !== 'true') {
      link.dataset.active = 'true';
    
    } else if (link.dataset.active === 'true') {
      link.dataset.active = 'false';
    } 
  });
}