import React, { useEffect } from "react";
import "./HomeComponent.css"; // Create a CSS file for styling

function Gallery_landing() {
  useEffect(() => {
    var $cont = document.querySelector(".cont");
    var $elsArr = [].slice.call(document.querySelectorAll(".el"));
    var $closeBtnsArr = [].slice.call(
      document.querySelectorAll(".el__close-btn")
    );

    setTimeout(function () {
      $cont.classList.remove("s--inactive");
    }, 200);

    let activeElement = null;

    $elsArr.forEach(function ($el) {
      $el.addEventListener("click", function () {
        if (this.classList.contains("s--active")) return;
        $cont.classList.add("s--el-active");
        this.classList.add("s--active");
        activeElement = this;
      });
    });

    $closeBtnsArr.forEach(function ($btn) {
      $btn.addEventListener("click", function (e) {
        e.stopPropagation();
        $cont.classList.remove("s--el-active");
        if (activeElement) {
          activeElement.classList.remove("s--active");
          activeElement = null;
        }
      });
    });
  }, []);
  return (
    <>
      <div className="Gallery_landing">
        <div class="cont s--inactive">
          <div class="cont__inner">
            <div class="el">
              <div class="el__overflow">
                <div class="el__inner">
                  <div class="el__bg"></div>
                  <div class="el__preview-cont">
                    <h2 class="el__heading">Section 1</h2>
                  </div>
                  <div class="el__content">
                    {/* <div class="el__text">Whatever</div> */}
                    <div class="el__close-btn"></div>
                  </div>
                </div>
              </div>
              {/* <div class="el__index">
                <div class="el__index-back">1</div>
                <div class="el__index-front">
                  <div class="el__index-overlay" data-index="1">
                    1
                  </div>
                </div>
              </div> */}
            </div>

            <div class="el">
              <div class="el__overflow">
                <div class="el__inner">
                  <div class="el__bg"></div>
                  <div class="el__preview-cont">
                    <h2 class="el__heading">Section 2</h2>
                  </div>
                  <div class="el__content">
                    {/* <div class="el__text">Whatever</div> */}
                    <div class="el__close-btn"></div>
                  </div>
                </div>
              </div>
              {/* <div class="el__index">
                <div class="el__index-back">2</div>
                <div class="el__index-front">
                  <div class="el__index-overlay" data-index="2">
                    2
                  </div>
                </div>
              </div> */}
            </div>

            <div class="el">
              <div class="el__overflow">
                <div class="el__inner">
                  <div class="el__bg"></div>
                  <div class="el__preview-cont">
                    <h2 class="el__heading">Section 3</h2>
                  </div>
                  <div class="el__content">
                    {/* <div class="el__text">Whatever</div> */}
                    <div class="el__close-btn"></div>
                  </div>
                </div>
              </div>
              {/* <div class="el__index">
                <div class="el__index-back">3</div>
                <div class="el__index-front">
                  <div class="el__index-overlay" data-index="3">
                    3
                  </div>
                </div>
              </div> */}
            </div>

            <div class="el">
              <div class="el__overflow">
                <div class="el__inner">
                  <div class="el__bg"></div>
                  <div class="el__preview-cont">
                    <h2 class="el__heading">Section 4</h2>
                  </div>
                  <div class="el__content">
                    {/* <div class="el__text">Whatever</div> */}
                    <div class="el__close-btn"></div>
                  </div>
                </div>
              </div>
              {/* <div class="el__index">
                <div class="el__index-back">4</div>
                <div class="el__index-front">
                  <div class="el__index-overlay" data-index="4">
                    4
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery_landing;
