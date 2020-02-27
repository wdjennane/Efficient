import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { color } from "../style/const";
import "../style/svgMap.css";

const SVGMap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 16%;
  align-items: center;
  width: 100vw;
`;

export const MainMap = ({ setGetDistrict, getId }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const result = async () => {
      try {
        const { data } = await axios.get(process.env.REACT_APP_API_URL_MAP, {
          headers: {
            accept: "application/json",
          },
        });
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    };

    result();
  }, []);

  const logData = () => {
    console.log(results && results);
  };
  logData();

  /* useEffect(() => {
    console.log("heeeeeeeeeeeeeee");
    const paths = Array.from(document.querySelectorAll("#mainMap path"));
    paths.className = "default";
  }, [getId]); */

  const test = () => {
    const paths = Array.from(document.querySelectorAll("#mainMap path"));
    console.log(results && results);

    results &&
      results.forEach(({ district, days }) => {
        const el = paths.find((path) => path.id === district); // récupère l'élément SVG
        days.map((value) => {
          if (value.date_id == getId) {
            console.log(value);
            el.classList.add(`cha_${value.events}`);
          }
        });
        //récupère le jour
        /*  el.setAttribute("class", `cha_${day.events}`); */ // ajoute la classe
      });
  };
  test();

  //il faut trouver un moyen de l'executer qu'une seule fois au mounted
  useEffect(() => {
    const paths = Array.from(document.querySelectorAll("#mainMap path"));
    paths.forEach((el) => {
      el.addEventListener("click", () => {
        setGetDistrict(+el.id.replace("d", ""));
      });
    });
  });
  return (
    <SVGMap>
      <svg
        width="707"
        height="567"
        viewBox="0 0 707 567"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="mainMap"
      >
        <path
          id="d1"
          className="default"
          d="M321.816 220.566L308.699 242.537C306.368 246.441 307.755 251.5 311.751 253.669L358.633 279.119C358.984 279.31 359.321 279.527 359.641 279.768L393.492 305.363C397.718 308.558 403.826 306.838 405.763 301.907L421.903 260.823C423.524 256.697 421.481 252.039 417.347 250.438L331.575 217.207C327.938 215.798 323.815 217.217 321.816 220.566Z"
        />
        <path
          id="d2"
          className="default"
          d="M417.989 243.02L356.836 218.763C349.6 215.893 350.309 205.428 357.866 203.56L378.232 198.526C379.404 198.236 380.626 198.216 381.807 198.466L426.506 207.921C430.786 208.827 433.545 213.003 432.699 217.296L428.788 237.131C427.82 242.038 422.638 244.864 417.989 243.02Z"
        />
        <path
          id="d3"
          className="default"
          d="M440.736 224.347L435.877 247.024C435.194 250.212 436.514 253.496 439.214 255.324L483.443 285.274C489.544 289.406 497.513 283.79 495.675 276.655L484.342 232.655C483.648 229.962 481.606 227.822 478.948 227.004L450.911 218.377C446.425 216.997 441.72 219.758 440.736 224.347Z"
        />
        <path
          id="d4"
          className="default"
          d="M409.029 310.311L426.35 266.816C428.249 262.049 434.081 260.276 438.311 263.18L497.533 303.84C499.067 304.894 500.186 306.449 500.697 308.238L502.365 314.075C502.801 315.602 502.774 317.223 502.285 318.734L489.56 358.104C487.942 363.109 482.017 365.218 477.601 362.36L412.116 319.987C408.909 317.912 407.616 313.859 409.029 310.311Z"
        />
        <path
          id="d5"
          className="default"
          d="M375.964 405.15L398.172 338.105C399.806 333.173 405.634 331.082 410.03 333.851L476.43 375.674C479.511 377.615 480.893 381.393 479.791 384.864L472.425 408.067C471.675 410.428 469.875 412.309 467.548 413.16L430.614 426.672C429.226 427.18 427.725 427.293 426.276 427L390.905 419.83C390.249 419.697 389.612 419.482 389.01 419.191L380.073 414.867C376.459 413.118 374.701 408.961 375.964 405.15Z"
        />
        <path
          id="d6"
          className="default"
          d="M387.501 320.266L358.86 298.319C355.11 295.447 349.701 296.43 347.204 300.44L332.747 323.646C332.289 324.382 331.714 325.038 331.045 325.59L292.394 357.445C288.419 360.721 288.531 366.844 292.622 369.973L310.472 383.624C310.958 383.995 311.486 384.31 312.043 384.561L356.252 404.499C360.59 406.455 365.665 404.216 367.145 399.694L390.239 329.104C391.295 325.875 390.198 322.332 387.501 320.266Z"
        />
        <path
          id="d7"
          className="default"
          d="M328.602 318.314L341.969 295.399C344.245 291.497 342.841 286.486 338.869 284.334L285.359 255.349C284.189 254.716 282.879 254.384 281.549 254.384H218.053C216.262 254.384 214.523 254.985 213.114 256.091L174.504 286.397C170.527 289.519 170.407 295.502 174.256 298.78L235.469 350.925C236.59 351.879 237.951 352.506 239.405 352.737L276.362 358.596C278.629 358.955 280.941 358.324 282.71 356.862L326.787 320.451C327.513 319.851 328.128 319.127 328.602 318.314Z"
        />
        <path
          id="d8"
          className="default"
          d="M289.679 242.916H228.552C225.533 242.916 222.77 241.215 221.41 238.52L196.421 188.996C195.483 187.136 195.307 184.984 195.93 182.997L201.939 163.845C202.782 161.157 204.977 159.111 207.717 158.458L315.172 132.852C320.434 131.598 325.398 135.82 325.005 141.215L320.198 207.209C320.11 208.409 319.753 209.574 319.153 210.617L301.284 241.676C299.58 244.637 295.766 245.605 292.855 243.815C291.9 243.227 290.801 242.916 289.679 242.916Z"
        />
        <path
          id="d9"
          className="default"
          d="M334.629 134.151L331.148 191C330.821 196.35 335.744 200.502 340.961 199.278L379.824 190.157C380.978 189.886 382.178 189.875 383.336 190.125L406.844 195.188C411.461 196.182 415.931 192.981 416.475 188.288L422.576 135.667C423.189 130.38 418.564 125.98 413.314 126.855L378.282 132.693C377.358 132.847 376.414 132.838 375.493 132.665L344.088 126.777C339.359 125.89 334.923 129.348 334.629 134.151Z"
        />
        <path
          id="d10"
          className="default"
          d="M429.894 131.082L423.089 190.63C422.609 194.823 425.47 198.667 429.623 199.412L441.969 201.628C442.366 201.699 442.758 201.801 443.141 201.931L482.217 215.275C484.2 215.952 486.37 215.824 488.259 214.918L526.221 196.729C530.881 194.496 532.233 188.497 528.982 184.481L510.551 161.713C509.398 160.289 508.769 158.512 508.769 156.679V122.682C508.769 118.263 505.187 114.682 500.769 114.682H492.761C492.313 114.682 491.866 114.719 491.424 114.794L436.505 124.102C432.994 124.698 430.298 127.543 429.894 131.082Z"
        />
        <path
          id="d11"
          className="default"
          d="M533.989 205.095L496.052 222.878C492.549 224.52 490.723 228.433 491.714 232.172L511.746 307.746C512.483 310.528 514.658 312.699 517.441 313.432L611.742 338.27C618.53 340.058 624.166 332.86 620.801 326.699L595.822 280.969L543.912 207.713C541.674 204.555 537.495 203.452 533.989 205.095Z"
        />
        <path
          id="d12"
          className="default"
          d="M506.326 329.119L492.585 368.32C491.633 371.036 492.214 374.055 494.106 376.225L590.259 486.46C592.622 489.17 596.503 489.97 599.745 488.416L619.28 479.056L642.622 470.613C643.389 470.335 644.11 469.942 644.758 469.447L678.64 443.565C680.349 442.259 681.46 440.321 681.723 438.187L690.232 369.224C690.775 364.824 687.637 360.822 683.235 360.3L629.705 353.949L515.91 324.029C511.877 322.968 507.705 325.184 506.326 329.119Z"
        />
        <path
          id="d13"
          className="default"
          d="M581.9 496.314L497.687 397.628C493.634 392.878 485.945 394.395 484 400.328L479.177 415.039C478.439 417.288 476.743 419.095 474.546 419.974L435.87 435.445C434.456 436.01 432.909 436.161 431.412 435.877L404.216 430.732C399.425 429.826 394.944 433.381 394.737 438.253L390.998 526.102C390.972 526.708 391.016 527.314 391.127 527.91L397.038 559.578C397.745 563.364 401.05 566.11 404.902 566.11H463.085C464.332 566.11 465.561 565.818 466.675 565.259L579.404 508.657C584.044 506.327 585.27 500.264 581.9 496.314Z"
        />
        <path
          id="d14"
          className="default"
          d="M379.756 424.167L318.98 396.663C315.635 395.149 311.689 396.106 309.41 398.985L229.304 500.147C225.816 504.552 227.835 511.084 233.2 512.753L349.431 548.904C352.487 549.854 354.683 552.535 355.012 555.719L355.291 558.411C355.713 562.489 359.149 565.588 363.248 565.588H377.283C382.247 565.588 386.013 561.113 385.165 556.221L380.162 527.356C380.062 526.782 380.026 526.198 380.053 525.615L384.449 431.83C384.603 428.556 382.743 425.519 379.756 424.167Z"
        />
        <path
          id="d15"
          className="default"
          d="M214.496 501.872L296.724 397.433C299.515 393.889 298.825 388.74 295.201 386.055L275.199 371.239C274.195 370.495 273.031 369.997 271.799 369.784L233.594 363.181C232.189 362.938 230.875 362.324 229.787 361.403L166.525 307.838C163.006 304.859 157.703 305.463 154.944 309.158L52.6971 446.122C50.0723 449.638 50.7693 454.612 54.2594 457.271L66.7001 466.75C68.6861 468.263 69.8517 470.617 69.8517 473.113V479.906C69.8517 483.669 72.4748 486.924 76.1523 487.723L77.9829 488.121C80.415 488.65 82.9547 488.016 84.8537 486.407L114.635 461.176C117.423 458.814 121.458 458.642 124.437 460.757L170.437 493.417C171.142 493.917 171.923 494.3 172.751 494.551L205.893 504.58C209.045 505.534 212.459 504.46 214.496 501.872Z"
        />
        <path
          id="d16"
          className="default"
          d="M22.6583 430.246L39.692 434.505C42.807 435.283 46.0857 434.124 48.0192 431.561L159.419 283.869C159.826 283.328 160.301 282.841 160.832 282.42L205.532 246.937C208.486 244.591 209.401 240.501 207.727 237.121L184.742 190.71C183.932 189.074 182.587 187.764 180.93 186.998L127.48 162.294C123.987 160.68 119.841 161.78 117.608 164.913L90.7136 202.653C89.6923 204.086 88.2268 205.142 86.5443 205.658L54.2666 215.557C51.6378 216.363 49.6073 218.462 48.8895 221.117L0.991004 398.241C0.36385 400.561 0.812158 403.039 2.21204 404.991L18.097 427.147C19.202 428.688 20.8186 429.786 22.6583 430.246Z"
        />
        <path
          id="d17"
          className="default"
          d="M129.473 145.704L130.176 125.995C130.267 123.468 131.546 121.133 133.627 119.696L289.961 11.7755C291.237 10.8945 292.742 10.4034 294.292 10.362L321.351 9.64044C326.367 9.50669 330.266 13.9696 329.461 18.9219L317.232 94.1048C317.038 95.2962 317.117 96.5161 317.461 97.673L321.836 112.36C323.142 116.743 320.514 121.326 316.071 122.414L202.868 150.128C200.214 150.777 198.075 152.736 197.196 155.323L192.534 169.035C191.031 173.455 186.079 175.654 181.793 173.807L134.301 153.336C131.272 152.031 129.355 149 129.473 145.704Z"
        />
        <path
          id="d18"
          className="default"
          d="M325.56 89.495L338.292 11.2164C338.908 7.42928 342.125 4.61279 345.961 4.50391L497.986 0.187743C501.823 0.0787934 505.197 2.71111 506.025 6.45982L512.889 37.5533C513.26 39.232 513.08 40.9854 512.376 42.5538L485.514 102.405C484.411 104.862 482.146 106.599 479.488 107.027L375.183 123.835C374.24 123.987 373.278 123.969 372.341 123.781L336.884 116.69C333.923 116.097 331.547 113.888 330.742 110.978L325.745 92.912C325.438 91.7997 325.374 90.6341 325.56 89.495Z"
        />
        <path
          id="d19"
          className="default"
          d="M525.391 42.7274L519.162 14.5104C518.09 9.65763 521.656 5.01252 526.621 4.79348L583.798 2.27094C586.43 2.15482 588.951 3.34203 590.538 5.44526L631.219 59.3725C632.267 60.7605 632.833 62.4518 632.833 64.1904V112.013C632.833 114.943 634.435 117.639 637.008 119.04L671.817 137.986C673.247 138.764 674.404 139.963 675.133 141.42C677.467 146.087 674.756 151.701 669.65 152.776L601.107 167.206C600.712 167.289 600.324 167.402 599.946 167.544L571.322 178.278L547.44 187.234C544.259 188.426 540.672 187.48 538.493 184.874L517.504 159.769C516.242 158.261 515.581 156.34 515.646 154.374L516.837 118.254C516.986 113.735 513.322 109.99 508.801 109.99C502.968 109.99 499.035 103.949 501.471 98.6489L524.848 47.7934C525.577 46.209 525.767 44.4301 525.391 42.7274Z"
        />
        <path
          id="d20"
          className="default"
          d="M603.012 175.92L557.76 193.851C552.969 195.749 551.196 201.615 554.134 205.849L601.556 274.193L635.591 337.823C636.805 340.092 639.037 341.639 641.588 341.98L692.16 348.722C696.535 349.306 700.556 346.236 701.145 341.862L706.214 304.273C706.293 303.682 706.307 303.085 706.254 302.492L695.511 182.277C695.429 181.355 695.187 180.455 694.796 179.615L687.645 164.239C686.074 160.861 682.379 159.015 678.735 159.786L604.303 175.531C603.863 175.624 603.431 175.754 603.012 175.92Z"
        />
      </svg>
    </SVGMap>
  );
};
