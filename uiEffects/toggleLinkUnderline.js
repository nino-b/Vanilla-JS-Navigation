
/**
 * Toggles 'data-active' value. 
 * If link was clicked, 'data-active="true"' and link has underline.
 * If link was not clicked, 'data-active="false"' won't have an underline.
 */
export default function toggleLinkUnderline(linkGroup, activeLink) {
  linkGroup.forEach(link => {
    if (link === activeLink && link.dataset.active !== 'true') {
      link.dataset.active = 'true';
    
    } else if (link.dataset.active === 'true') {
      link.dataset.active = 'false';
    } 
  });
}