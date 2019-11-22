const isMobile = () => window.outerWidth <= 580;
const isTablet = () => window.outerWidth > 580 && window.outerWidth < 900;

export {
  isMobile,
  isTablet
}
