import React, { useEffect, useState } from "react";
import "./Odometer.scss";

const Odometer = ({classN, num, animationSpeed, animationTimingStyles, reverse, gap, fontSize }) => {
  const [odometerNum, setOdometerNum] = useState([]);
  const [oc, setOc] = useState();
  const [classes, setClasses] = useState(classN)

  useEffect(() => {
    if (num) {
      let currNumState = odometerNum;
      let tempNum = num
      do {
        let digitToInsert = [];
        if (tempNum > 0) {
          let StringNum = String(tempNum);

          let iteratorVal = (StringNum.length - 1) * 10 + (tempNum % 10);

          for (let i = 0; i <= iteratorVal; i++) {
            digitToInsert.push(i % 10);
          }
        } else {
          digitToInsert.push(0);
        }
         currNumState = [...currNumState, digitToInsert];
         tempNum = parseInt(tempNum / 10);
      } while (tempNum > 0);

      setOdometerNum(currNumState);
    }

    if(reverse) {
      setClasses(classes+' reverse')
    }
  }, []);

  useEffect(() => {
    if (odometerNum.length > 0) {
      const contentToRender = odometerNum.reverse().map((item, index) => {
        const eachItem = reverse? item: item.reverse()
        return (
          <div className="digitWrapper" key={index} style={{fontSize: fontSize?`${fontSize}px`:'18px'}}>
            &nbsp;&nbsp;
            <div
              className="digit"
              style={{
                animationDuration: animationSpeed? `${animationSpeed}s` : '4s',
                animationTimingFunction: `${animationTimingStyles}`
              }}
            >
              {eachItem.map((ele, key) => {
                return <span key={key}>{ele}</span>;
              })}
            </div>
          </div>
        );
      });
      setOc(contentToRender);
    }
  }, [odometerNum]);


  window.onload = function () {
    setTimeout(() => {
      const odoMs = Array.from(document.querySelectorAll(".odometer"));
      odoMs.map((ele) => {
        if((ele.classList.value).indexOf('reverse') > -1) {
          return ''
        }
        const digitWrapper = ele.querySelector(".digitWrapper");
        if (!digitWrapper) return '';
        const hh = digitWrapper.clientHeight;

        const digi = Array.from(ele.querySelectorAll(".digit"));
        digi.map((item) => {
          item.style.marginBottom = `${hh}px`;
          return ''
        });
        return ''
      });
    }, 10);
  };

  if(!num) {
    console.error('Num props on Odometer can not be empty')
    return ''
  }

  if(oc) {
    return (
      <div className={classes ? classes + " odometer" : "odometer"} style={gap && {columnGap:`${gap}px` }} >{oc}</div>
    )
  }
};

export default Odometer;
