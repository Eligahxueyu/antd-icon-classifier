import classifier from '@ali/antd-icon-classifier';

window.onload = async () => {
  await classifier.load();
  console.log('loaded');
  const imgEl = document.querySelector('img');
  let res = classifier.predict(imgEl);
  console.log(res);
  res = classifier.predict(imgEl);
  console.log(res);
};
