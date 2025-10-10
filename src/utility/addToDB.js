const getStoredApps = () => {
  const storedInstallSTR = localStorage.getItem("installation");
  if(storedInstallSTR){
    const storedData = JSON.parse(storedInstallSTR);
    return storedData;
  } else {
    return [];
  }
}

const addToStoredDB = (id) => {
  const storedData = getStoredApps();
  if(storedData.includes(id)){
    alert('this id is already exist')
  } else {
    storedData.push(id);
    console.log(storedData);
    const data = JSON.stringify(storedData);
    localStorage.setItem("installation", data)
  }
}

export { addToStoredDB, getStoredApps };
