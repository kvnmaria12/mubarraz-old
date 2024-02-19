function ScrollToTopOfPage() {
  window.scrollTo(0, 0);
  document.documentElement.style.scrollBehavior = 'smooth';
}

export default ScrollToTopOfPage;
