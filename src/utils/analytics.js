
const isGA4Available = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

export const trackPageView = (pagePath, pageTitle) => {
  if (!isGA4Available()) return;

  window.gtag('config', 'G-3D1NW3HBBD', {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

export const trackEvent = (eventName, eventParams = {}) => {
  if (!isGA4Available()) return;

  window.gtag('event', eventName, eventParams);
};

export const trackExperienceClick = (company, title) => {
  trackEvent('experience_tile_click', {
    event_category: 'engagement',
    event_label: `${company} - ${title}`,
    company: company,
    job_title: title,
  });
};

export const trackEducationClick = (school, degree) => {
  trackEvent('education_tile_click', {
    event_category: 'engagement',
    event_label: `${school} - ${degree}`,
    school: school,
    degree: degree,
  });
};

export const trackProjectClick = (projectTitle) => {
  trackEvent('project_tile_click', {
    event_category: 'engagement',
    event_label: projectTitle,
    project_title: projectTitle,
  });
};

export const trackFormInteraction = (formName, action, additionalParams = {}) => {
  trackEvent('form_interaction', {
    event_category: 'form',
    event_label: `${formName}_${action}`,
    form_name: formName,
    form_action: action,
    ...additionalParams,
  });
};

