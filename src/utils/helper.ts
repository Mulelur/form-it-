export const currentTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export const ltzDevice = () => {
  const currentLanguage = window.localStorage.getItem('i18nLng') || 'en';
  const SID = process.env.REACT_APP_SID || '';

  const data = {
    SID,
    TimeZone: currentTimezone(),
    Lang: currentLanguage.toLowerCase()
  };

  const results = Object.entries(data)
    .map((dataItem) => {
      const [item, value] = dataItem;

      return `${item}=${value}`;
    })
    .join(';');

  return results;
};
