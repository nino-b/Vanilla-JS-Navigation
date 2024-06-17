
/**
 * Toggles 'data-active' value. 
 * If link was clicked, 'data-active="true"' and link has underline.
 * If link was not clicked, 'data-active="false"' won't have an underline.
 */
export default function toggleLinkUnderline(headerLinks, activeLinkHref, activeElement = null, footerLinks = null) {
  toggleHeaderLinkUnderline(headerLinks, activeLinkHref);

  if (activeElement && footerLinks) {
    toggleFooterLinkUnderline(footerLinks, activeElement);
  }
}


function toggleHeaderLinkUnderline(headerLinks, activeLinkHref) {
  headerLinks.forEach(link => {
    const href = link.href.substring(link.href.lastIndexOf('/'));

    if (href === activeLinkHref && link.dataset.active !== 'true') {
      link.dataset.active = 'true';

    } else if (href !== activeLinkHref && link.dataset.active == 'true') {
      link.dataset.active = 'false';
    }
  });
}


function toggleFooterLinkUnderline(footerLinks, activeElement) {
  footerLinks.forEach(link => {
    if (link.dataset.active === 'true') {
      link.dataset.active = 'false';
    }
  });
  if (activeElement.classList.contains('footer-nav')) {
    activeElement.dataset.active = 'true';
  } 
}



/* 
export default function toggleLinkUnderline(linkGroup, activeLink) {
  linkGroup.forEach(link => {
    if (link === activeLink && link.dataset.active !== 'true') {
      link.dataset.active = 'true';
    
    } else if (link.dataset.active === 'true') {
      link.dataset.active = 'false';
    } 
  });
}
 */