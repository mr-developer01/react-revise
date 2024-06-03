
export const topRatedRestro = (
  toggle,
  mainResData,
  dummyCards,
  setMainResData,
  setToggle
) => {
  if (toggle) {
    const filterData = mainResData.filter((data) => {
      return data.info.avgRating > 4.2 ? data : null;
    });
    setMainResData(filterData);
  } else {
    setMainResData(dummyCards);
  }
  setToggle(!toggle);
};

//   export default resData;

// JS me two types import/export hote hai :---

// 1. Common import/export(Node js)
// 2. Module import/export (Es6)
//    A. Export:--
//  - Default Export
//  - Named Export
//   B. Import:---
//  - Default Export
//  - Named Export
