const q = p => document.querySelector(p);

const boot = () => {
  let isInSidebar = false;

  const sidebar = q("#sidebar");
  const appTarget = q("#dsa-cal-app");

  if (appTarget) {
    isInSidebar = sidebar && sidebar.contains(appTarget);
  }

  return {
    appTarget,
    isInSidebar: !!isInSidebar
  };
};

export default boot;
