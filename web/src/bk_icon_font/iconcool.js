!(function () {
    var svgCode = '<svg xmlns="http://www.w3.org/2000/svg" data-name="gsekit" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;visibility:hidden"><symbol id="gsekit-icon-close-line" viewBox="0 0 1024 1024"><path d="M832 259.2L764.8 192 512 444.8 259.2 192 192 259.2 444.8 512 192 764.8l67.2 67.2L512 579.2 764.8 832l67.2-67.2L579.2 512z"/></symbol><symbol id="gsekit-icon-down-line" viewBox="0 0 1024 1024"><path fill-rule="evenodd" d="M512 864l67.2-68.8L784 592l-68.8-67.2L560 680V160h-96v520L308.8 524.8 240 592l204.8 203.2z" clip-rule="evenodd"/></symbol><symbol id="gsekit-icon-edit-fill" viewBox="0 0 1024 1024"><path d="M676.8 128l108.8 108.8-54.4 54.4-108.8-108.8 54.4-54.4zm-83.2 81.6L704 320 320 704H209.6V593.6l384-384zm302.4 576V896H128V785.6h768z"/></symbol><symbol id="gsekit-icon-exit-full-screen-line" viewBox="0 0 1024 1024"><path d="M416 144v240c0 17.6-14.4 32-32 32H144v-64h208V144h64zm288 0v208h208v64H672c-17.6 0-32-14.4-32-32V144h64zm208 496v64H704v208h-64V672c0-17.6 14.4-32 32-32h240zm-528 0c17.6 0 32 14.4 32 32v240h-64V704H144v-64h240z"/></symbol><symbol id="gsekit-icon-full-screen-line-line" viewBox="0 0 1024 1024"><path d="M400 128v64H192v208h-64V160c0-17.6 14.4-32 32-32h240zm464 0c17.6 0 32 14.4 32 32v240h-64V192H624v-64h240zm32 496v240c0 17.6-14.4 32-32 32H624v-64h208V624h64zm-704 0v208h208v64H160c-17.6 0-32-14.4-32-32V624h64z"/></symbol><symbol id="gsekit-icon-help-document-fill" viewBox="0 0 1024 1024"><path d="M512 64C264 64 64 264 64 512c0 57.6 11.2 113.6 32 166.4V896c0 17.6 14.4 32 32 32h217.6C576 1019.2 836.8 908.8 928 678.4S908.8 187.2 678.4 96C625.6 75.2 569.6 64 512 64zm-11.2 657.6c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zm86.4-214.4c-36.8 20.8-48 35.2-48 62.4V584H464v-16c-3.2-44.8 11.2-70.4 51.2-92.8 36.8-22.4 48-35.2 48-60.8s-20.8-44.8-52.8-44.8c-28.8-1.6-52.8 19.2-56 48v3.2h-76.8c1.6-70.4 49.6-118.4 136-118.4 80 0 132.8 44.8 132.8 110.4 1.6 41.6-19.2 72-59.2 94.4z"/></symbol><symbol id="gsekit-icon-help-document-line" viewBox="0 0 1024 1024"><path d="M512 64C264 64 64 264 64 512c0 57.6 11.2 113.6 32 166.4V896c0 17.6 14.4 32 32 32h217.6C576 1019.2 836.8 908.8 928 678.4S908.8 187.2 678.4 96C625.6 75.2 569.6 64 512 64zm0 832c-52.8 0-105.6-11.2-153.6-32H160V665.6C75.2 470.4 164.8 244.8 358.4 160s420.8 4.8 505.6 198.4-4.8 420.8-198.4 505.6c-48 20.8-100.8 32-153.6 32z"/><path d="M548.8 673.6a48 48 0 01-48 48 48 48 0 01-48-48 48 48 0 0196 0zM513.6 302.4c80 0 132.8 44.8 132.8 110.4 0 41.6-20.8 72-60.8 96s-48 35.2-48 62.4v14.4H464v-16c-3.2-44.8 11.2-70.4 51.2-92.8 36.8-22.4 48-35.2 48-60.8s-20.8-44.8-52.8-44.8c-28.8-1.6-52.8 19.2-56 48v3.2h-76.8c0-70.4 49.6-120 136-120z"/></symbol><symbol id="gsekit-icon-incomplete-line" viewBox="0 0 1024 1024"><path d="M512 64C264 64 64 264 64 512s200 448 448 448 448-200 448-448S760 64 512 64zm0 832c-211.2 0-384-172.8-384-384s172.8-384 384-384v384h384c0 211.2-172.8 384-384 384z"/></symbol><symbol id="gsekit-icon-masterplate-fill" viewBox="0 0 1024 1024"><path fill-rule="evenodd" d="M864 128c17.6 0 32 14.4 32 32v192H128V160c0-17.6 14.4-32 32-32h704zm32 288v448c0 17.6-14.4 32-32 32H448V416h448zm-512 0v480H160c-17.6 0-32-14.4-32-32V416h256z" clip-rule="evenodd"/></symbol><symbol id="gsekit-icon-parenet-node-line" viewBox="0 0 1024 1024"><path d="M304 256c-27.2 0-48 20.8-48 48s20.8 48 48 48 48-20.8 48-48-20.8-48-48-48zm416 416c-27.2 0-48 20.8-48 48s20.8 48 48 48 48-20.8 48-48-20.8-48-48-48zM304 192c62.4 0 112 49.6 112 112 0 49.6-33.6 92.8-78.4 107.2-16 179.2 72 267.2 275.2 276.8 14.4-46.4 56-80 107.2-80 62.4 0 112 49.6 112 112s-49.6 112-112 112c-51.2 0-94.4-33.6-107.2-80-238.4-9.6-355.2-126.4-339.2-339.2C227.2 398.4 192 355.2 192 304c0-62.4 49.6-112 112-112z"/></symbol><symbol id="gsekit-icon-strategy-fill" viewBox="0 0 1024 1024"><path d="M512 224c-158.4 0-288 129.6-288 288h64c0-123.2 100.8-224 224-224s224 100.8 224 224h64c0-158.4-129.6-288-288-288zm0 416c27.2 0 48 20.8 48 48s-20.8 48-48 48-48-20.8-48-48 20.8-48 48-48zm32-248h-64v188.8c-48 14.4-80 57.6-80 107.2 0 62.4 49.6 112 112 112 49.6 0 92.8-32 107.2-80 17.6-59.2-16-121.6-75.2-139.2V392zM512 64c248 0 448 200 448 448S760 960 512 960 64 760 64 512 264 64 512 64z"/></symbol><symbol id="gsekit-icon-process-manager-fill" viewBox="0 0 1024 1024"><path d="M704 432a48 48 0 01-48 48 48 48 0 01-48-48 48 48 0 0196 0zM416 592a48 48 0 01-48 48 48 48 0 01-48-48 48 48 0 0196 0z"/><path d="M896 96H128c-17.6 0-32 14.4-32 32v768c0 17.6 14.4 32 32 32h768c17.6 0 32-14.4 32-32V128c0-17.6-14.4-32-32-32zM400 699.2V768h-64v-68.8c-59.2-17.6-92.8-80-75.2-139.2 11.2-36.8 38.4-64 75.2-75.2V256h64v228.8c59.2 17.6 92.8 80 75.2 139.2-11.2 36.8-38.4 64-75.2 75.2zm288-160V768h-64V539.2c-59.2-17.6-92.8-80-75.2-139.2 11.2-36.8 38.4-64 75.2-75.2V256h64v68.8c59.2 17.6 92.8 80 75.2 139.2-11.2 36.8-38.4 64-75.2 75.2z"/></symbol><symbol id="gsekit-icon-status-fill" viewBox="0 0 1024 1024"><path d="M832 512a320 320 0 01-320 320 320 320 0 01-320-320 320 320 0 01640 0z"/><path d="M512 128c211.2 0 384 172.8 384 384S723.2 896 512 896 128 723.2 128 512s172.8-384 384-384m0-64C264 64 64 264 64 512s200 448 448 448 448-200 448-448S760 64 512 64z"/></symbol><symbol id="gsekit-icon-switch-line" viewBox="0 0 1024 1024"><path fill-rule="evenodd" d="M670.4 224L896 449.6H128v-86.4h558.4L608 284.8l62.4-60.8zM896 574.4v86.4H337.6l78.4 78.4-62.4 60.8L128 574.4h768z" clip-rule="evenodd"/></symbol><symbol id="gsekit-icon-swither-small" viewBox="0 0 1024 1024"><path d="M384 384h224c70.4 0 128 57.6 128 128v64h64v-64c0-105.6-86.4-192-192-192H384v-64l-160 96 160 96v-64zm256 256H416c-70.4 0-128-57.6-128-128v-64h-64v64c0 105.6 86.4 192 192 192h224v64l160-96-160-96v64z"/></symbol><symbol id="gsekit-icon-up-line" viewBox="0 0 1024 1024"><path fill-rule="evenodd" d="M512 160l-67.2 68.8L240 432l68.8 67.2L464 344v520h96V344l155.2 155.2L784 432 579.2 228.8z" clip-rule="evenodd"/></symbol><symbol id="gsekit-icon-jump-fill" viewBox="0 0 1024 1024"><path d="M640 128h224c17.6 0 32 14.4 32 32v217.6c0 14.4-17.6 20.8-27.2 11.2L784 307.2l-208 208-67.2-67.2 206.4-206.4-88-84.8c-9.6-11.2-1.6-28.8 12.8-28.8zm-128 0v96H224v576h576V512h96v352c0 17.6-14.4 32-32 32H160c-17.6 0-32-14.4-32-32V160c0-17.6 14.4-32 32-32h352z" class="st0"/></symbol><symbol id="gsekit-icon-filter-fill" viewBox="0 0 1024 1024"><path d="M895.2 96H128.1c-27.3 0-42.1 32.1-24.3 52.8L384 475.3v400.9c0 18.5 15.2 32 32 32 4.7 0 9.6-1.1 14.3-3.4l192-96c10.8-5.4 17.7-16.5 17.7-28.6V474.4l279.5-325.6c17.8-20.7 3.1-52.8-24.3-52.8z"/></symbol><symbol id="gsekit-icon-check-line" viewBox="0 0 1024 1024"><path d="M827.2 224l-440 441.6-192-193.6-67.2 67.2 192 192 68.8 68.8L896 292.8z"/></symbol><symbol id="gsekit-icon-copy" viewBox="0 0 1024 1024"><path d="M892.8 235.2h-208c-9.6 0-17.6 3.2-24 9.6l-6.4 6.4h-3.2v-120c0-19.2-16-35.2-35.2-35.2H408c-9.6 0-17.6 3.2-24 9.6l-6.4 6.4h-3.2v3.2L105.6 384c-6.4 6.4-9.6 16-9.6 24v347.2c0 19.2 16 35.2 35.2 35.2h243.2v104c0 19.2 16 35.2 35.2 35.2h484.8c19.2 0 35.2-16 35.2-35.2v-624c-1.6-20.8-17.6-35.2-36.8-35.2zm-520-20.8v158.4H214.4l158.4-158.4zM384 521.6c-6.4 6.4-9.6 16-9.6 24V720h-208V443.2h243.2c19.2 0 35.2-16 35.2-35.2V164.8H584v158.4L384 521.6zm267.2-168V512H492.8l158.4-158.4zm208 505.6h-416V580.8h243.2c19.2 0 35.2-16 35.2-35.2V304h139.2v555.2z"/></symbol><symbol id="gsekit-icon-paste" viewBox="0 0 1024 1024"><path d="M928 547.2c0-9.6-3.2-17.6-9.6-24L651.2 254.4V131.2c0-19.2-16-35.2-35.2-35.2H131.2C112 96 96 112 96 131.2v624c0 19.2 16 35.2 35.2 35.2h243.2v104c0 19.2 16 35.2 35.2 35.2h484.8c19.2 0 35.2-16 35.2-35.2V563.2l-1.6-16zM809.6 512H651.2V353.6L809.6 512zM200 164.8h347.2v68.8H200v-68.8zm659.2 433.6v259.2h-416V304h139.2v243.2c0 19.2 16 35.2 35.2 35.2h243.2v16z"/></symbol><symbol id="gsekit-icon-updating" viewBox="0 0 1024 1024"><path d="M171.296 549.024c-24.544-153.568 59.808-308.768 210.432-367.488 111.648-43.52 232-22.72 317.248 39.456l-72.512 117.472 325.248-1.248L835.456-.032l-59.552 96.416C650.336 15.072 479.136-11.52 329.248 46.912c-207.68 80.96-327.232 290.336-303.616 502.08h145.664zm681.376-84.064c24.544 153.568-59.776 308.768-210.432 367.488-102.688 40.032-215.872 24.928-302.88-29.024 16.576-26.88 65.536-106.208 65.536-106.208l-349.76-20.512 148 347.296 62.048-100.48c125.568 81.312 279.584 101.984 429.504 43.552 207.648-80.992 327.232-290.336 303.616-502.048l-145.664-.032z"/></symbol><symbol id="gsekit-icon-environment" viewBox="0 0 1024 1024"><path d="M960 128.8H64v632.48h896V128.8zM128 698.08V192h769.6v506.08zM783.04 832H276v63.2h507.04V832z"/><path d="M529.44 256.48l-104 252.32-73.6-61.6-137.76-1.12-.48 63.2 115.04.96 122.24 102.4 87.52-212.16 61.12 107.84h196.32v-63.2H636.48L529.44 256.48z"/></symbol><symbol id="gsekit-icon-environment-2" viewBox="0 0 1024 1024"><path d="M515.2 208l129.6 224H385.6l129.6-224m0-112c-4.8 0-11.2 3.2-14.4 8L288 472c-6.4 11.2 1.6 24 14.4 24H728c12.8 0 20.8-12.8 14.4-24L528 104c-3.2-4.8-8-8-12.8-8zM304 608c70.4 0 128 57.6 128 128s-57.6 128-128 128-128-57.6-128-128 57.6-128 128-128m0-64c-105.6 0-192 86.4-192 192s86.4 192 192 192 192-86.4 192-192-86.4-192-192-192zM848 624v224H624V624h224m48-64H576c-9.6 0-16 6.4-16 16v320c0 9.6 6.4 16 16 16h320c9.6 0 16-6.4 16-16V576c0-9.6-6.4-16-16-16z"/></symbol><symbol id="gsekit-icon-cc-lock" viewBox="0 0 1024 1024"><path d="M551.808 716.8v79.648c0 17.056-17.056 34.144-39.808 34.144s-39.808-17.056-39.808-34.144V716.8c-22.752-11.392-39.808-34.144-39.808-56.896 0-39.808 34.144-68.256 79.648-68.256s79.648 28.448 79.648 68.256c0 22.752-17.056 45.504-39.808 56.896zm301.536-295.808H170.688c-62.592 0-113.792 45.504-113.792 102.4v341.344c0 56.896 51.2 102.4 113.792 102.4h682.656c62.592 0 113.792-45.504 113.792-102.4V523.392c0-56.896-51.2-102.4-113.792-102.4zM358.4 347.008c0-51.2 17.056-170.656 153.6-170.656s153.6 108.096 153.6 170.656v39.808h113.792v-39.808c0-164.992-108.096-273.056-273.056-273.056S233.28 182.048 233.28 347.008v39.808h113.792v-39.808z"/></symbol><symbol id="gsekit-icon-lock-radius" viewBox="0 0 1091.368 1024"><path fill="url(#a)" d="M158.425 863.119c109.076-23.58 273.85-31.439 380.604-26.199 106.755 5.24 222.792 20.959 222.792 20.959s30.17-13.1 27.85-7.86c-2.321 5.24-16.246 13.1-6.963 15.72 9.283 2.62 104.434 13.099 143.887 20.958 39.453 7.86 58.019 15.72 58.019 15.72s25.915-44.538 83.016-39.298c0 4.367-21.071 9.518-27.992 20.949-6.92 11.43-22.534 18.349-22.534 18.349s12.18-6.541 33.217 3.274c21.037 9.816 41.047 13.582 41.047 15.065 0 1.483-9.283 23.579-85.867 7.86-31.245-7.86-46.416 34.058-197.265 44.537-150.849 10.48-406.131 18.34-406.131 18.34s11.603 15.718 34.81 20.958c0 0-16.244 15.72-48.735 10.48-32.49-5.24-67.302-31.439-67.302-31.439s-85.868-5.24-118.358-10.48c-32.49-5.239-69.623-18.338-95.151-20.958-25.529-2.62-141.566-15.72-97.472-44.538 0 0 39.453-28.819 148.528-52.397z"/><path fill="#C4C6CC" d="M148.21 902.737v67.368h67.369v13.474l-65.132-.014-15.71.014v-80.842h13.474zm741.053 0v80.842l-15.71-.014-65.132.014v-13.474h67.368v-67.368h13.474z"/><path fill="url(#b)" d="M229.053 458.105h565.894a40.421 40.421 0 0140.421 40.421v390.737a40.421 40.421 0 01-40.42 40.421H229.052a40.421 40.421 0 01-40.421-40.42V498.525a40.421 40.421 0 0140.42-40.42z"/><path fill="#979BA5" d="M539.211 734.978l8.509 42.532c2.189 10.945-4.91 21.593-15.855 23.782a20.21 20.21 0 01-3.963.392h-31.804c-11.162 0-20.21-9.048-20.21-20.21 0-1.331.131-2.659.392-3.964l8.509-42.532c-20.156-9.559-33.42-29.162-33.42-51.189 0-31.726 27.239-57.263 60.631-57.263 33.392 0 60.632 25.537 60.632 57.263 0 22.027-13.265 41.63-33.42 51.19z"/><path fill="#F8F9FA" d="M222.316 458.105h579.368a33.684 33.684 0 0133.684 33.684 33.684 33.684 0 01-33.684 33.685H222.316a33.684 33.684 0 01-33.684-33.685 33.684 33.684 0 0133.684-33.684z"/><path fill="url(#d)" d="M704 314.167c0-107.808-85.961-195.204-192-195.204s-192 87.396-192 195.204v173.515c0 5.989-14.327 10.844-32 10.844-16.79 0-30.559-4.382-31.894-9.955l-.106-.89V314.168c0-143.744 114.615-260.272 256-260.272s256 116.528 256 260.272v173.515c0 5.989-14.327 10.844-32 10.844-17.673 0-32-4.855-32-10.844V314.167z"/><path fill="#EBEDF0" d="M303.158 478.316h8.084V317.38c0-107.942 89.924-195.368 200.758-195.368s200.758 87.426 200.758 195.368v160.936h8.084V317.38c0-111.99-93.46-202.854-208.842-202.854-115.382 0-208.842 90.864-208.842 202.854v160.936z"/><path fill="#DCDEE0" d="M289.684 471.579c17.718 0 32.24-5.472 33.583-12.42l.101-1.054v26.948c0 7.44-15.08 13.473-33.684 13.473-17.717 0-32.24-5.471-33.583-12.42l-.101-1.053v-26.948c0 7.442 15.08 13.474 33.684 13.474zM734.316 471.579c17.717 0 32.24-5.472 33.583-12.42l.101-1.054v26.948c0 7.44-15.08 13.473-33.684 13.473-17.718 0-32.24-5.471-33.583-12.42l-.101-1.053v-26.948c0 7.442 15.08 13.474 33.684 13.474z"/><path fill="#C4C6CC" d="M653.474 20.21A13.474 13.474 0 01640 33.685a13.474 13.474 0 01-13.474-13.473 13.474 13.474 0 0126.948 0zM929.684 579.368a13.474 13.474 0 01-13.473 13.474 13.474 13.474 0 01-13.474-13.474 13.474 13.474 0 0126.947 0zM161.684 390.737a13.474 13.474 0 01-13.473 13.474 13.474 13.474 0 01-13.474-13.474 13.474 13.474 0 0126.947 0z"/></g></symbol><symbol id="gsekit-icon-alert" viewBox="0 0 1024 1024"><path d="M608 864a96 96 0 01-96 96 96 96 0 01-96-96 96 96 0 01192 0zM544 704h-67.2c-17.6 0-30.4-14.4-32-33.6L416 100.8c0-19.2 14.4-36.8 32-36.8h124.8c17.6 0 33.6 17.6 32 36.8L576 670.4c0 19.2-14.4 33.6-32 33.6z"/></symbol><symbol id="gsekit-icon-logout-fill" viewBox="0 0 1024 1024"><path d="M441.12 195.36v67.2H260.64a61.6 61.6 0 00-64 63.04v375.84a63.04 63.04 0 0049.28 61.44 90.08 90.08 0 0016 1.44h179.2V832a18.56 18.56 0 01-2.88 0H254.72A128 128 0 01128 704V324a125.12 125.12 0 0174.08-116A114.4 114.4 0 01256 195.2h185.6zm174.56 437.92h-268a18.4 18.4 0 01-20.48-14.08 22.4 22.4 0 010-5.6V413.76a17.76 17.76 0 0120.16-19.36h268.8V210.56a17.28 17.28 0 0110.72-17.12 17.44 17.44 0 0120.32 4.48c3.36 3.52 7.04 6.72 10.4 10.08l129.6 127.04 165.76 163.04a17.12 17.12 0 010 27.52Q833.92 642.24 714.88 759.04l-67.84 66.24a17.6 17.6 0 01-20.16 5.28 17.28 17.28 0 01-11.36-18.24V633.28z"/></symbol><symbol id="gsekit-icon-shouqi" viewBox="0 0 2730.667 1024"><path d="M2218.667 0c281.6 0 512 230.4 512 512s-230.4 512-512 512H512C230.4 1024 0 793.6 0 512S230.4 0 512 0h1706.667zm-384 213.333c-25.6-25.6-68.267-25.6-93.867 0l-290.133 290.134L1740.8 793.6l8.533 8.533c8.534 8.534 25.6 8.534 34.134 8.534 17.066 0 34.133-8.534 42.666-17.067 25.6-25.6 25.6-68.267 0-93.867L1706.667 563.2H2056.533c34.134-8.533 59.734-34.133 59.734-68.267 0-34.133-25.6-68.266-68.267-68.266h-341.333l128-128 8.533-8.534c17.067-17.066 17.067-51.2-8.533-76.8zm-844.8-8.533c-25.6-17.067-59.734-17.067-85.334 8.533s-25.6 68.267 0 93.867l128 128h-358.4c-34.133 0-59.733 34.133-59.733 68.267 0 34.133 25.6 68.266 68.267 68.266h349.866l-128 128-8.533 8.534c-17.067 25.6-17.067 59.733 8.533 85.333 17.067 17.067 25.6 17.067 42.667 17.067s34.133-8.534 42.667-17.067L1280 503.467 989.867 204.8z"/></symbol><symbol id="gsekit-icon-zhankai" viewBox="0 0 2730.667 1024"><path d="M2218.667 0c281.6 0 512 230.4 512 512s-230.4 512-512 512H512C230.4 1024 0 793.6 0 512S230.4 0 512 0h1706.667zM998.4 213.333c-25.6-25.6-68.267-25.6-93.867 0L614.4 503.467 904.533 793.6l8.534 8.533c8.533 8.534 25.6 8.534 34.133 8.534 17.067 0 34.133-8.534 42.667-17.067 25.6-25.6 25.6-68.267 0-93.867l-128-128H1211.733C1254.4 563.2 1280 529.067 1280 503.467c0-34.134-25.6-68.267-68.267-68.267H870.4l128-128 8.533-8.533c17.067-25.6 17.067-59.734-8.533-85.334zm819.2-8.533c-25.6-17.067-59.733-17.067-85.333 8.533s-25.6 68.267 0 93.867l128 128H1501.867c-25.6 0-51.2 34.133-51.2 68.267 0 34.133 25.6 68.266 68.266 68.266H1868.8l-128 128-8.533 8.534c-25.6 17.066-25.6 59.733 0 76.8 17.066 17.066 25.6 17.066 42.666 17.066s34.134-8.533 42.667-17.066l290.133-290.134L1817.6 204.8z"/></symbol><symbol id="gsekit-icon-weitongbu" viewBox="0 0 1024 1024"><path d="M260.8 452.8V544c0 75.2 60.8 137.6 137.6 137.6h251.2v-88l233.6 140.8-233.6 140.8v-88H398.4C264 787.2 155.2 678.4 155.2 544v-91.2h105.6zm113.6-310.4v88h251.2c134.4 0 243.2 108.8 243.2 243.2v91.2H763.2v-91.2c0-75.2-60.8-137.6-137.6-137.6H374.4v88L140.8 281.6l233.6-139.2z"/></symbol><symbol id="gsekit-icon-reduce-fill" viewBox="0 0 1024 1024"><path d="M512 64C264 64 64 264 64 512s200 448 448 448 448-200 448-448S760 64 512 64zm256 494.4H256v-80h512v80z"/></symbol><symbol id="gsekit-icon-shrink-fill" viewBox="0 0 1024 4551.111"><path d="M455.111 0C768 0 1024 256 1024 568.889v3413.333c0 312.89-256 568.89-568.889 568.89H0V0h455.111zm204.8 1962.667l-375.467 369.777 375.467 369.778 79.645-79.644-290.134-290.134 290.134-290.133-79.645-79.644z" class="st0"/></symbol><symbol id="gsekit-icon-expand-fill" viewBox="0 0 1024 4551.111"><path d="M0 4551.111V0h512c284.444 0 512 227.556 512 512v3527.111c0 284.445-227.556 512-512 512H0zm364.089-1962.667l375.467-369.777-375.467-369.778-79.645 79.644 290.134 290.134L284.444 2508.8l79.645 79.644z" class="st0"/></symbol><symbol id="gsekit-icon-angle-left-line" viewBox="0 0 1024 1024"><path d="M256 512l420 416 92-91.04L440 512l328-324.96L676 96 256 512z"/></symbol><symbol id="gsekit-icon-unfinished" viewBox="0 0 1024 1024"><path fill="#ffb848" d="M512 0C227.6 0 0 227.6 0 512s227.6 512 512 512 512-227.6 512-512S796.4 0 512 0zm0 967.1C261.7 967.1 56.9 762.3 56.9 512S261.7 56.9 512 56.9V512h455.1c0 250.3-204.8 455.1-455.1 455.1z"/><path fill="#ffe8c3" d="M512 57c-33.6 0-66.4 3.6-97.9 10.6C215.9 111.5 65.3 285.5 57.2 494.4c-.2 5.8-.3 11.7-.3 17.6 0 250.3 204.8 455.1 455.1 455.1S967.1 762.3 967.1 512H512V57z"/></symbol><symbol id="gsekit-icon-correct" viewBox="0 0 1024 1024"><path fill="#62d18a" d="M512 1024C227.6 1024 0 796.4 0 512S227.6 0 512 0s512 227.6 512 512-227.6 512-512 512zm0-967.1C261.7 56.9 56.9 261.7 56.9 512S261.7 967.1 512 967.1 967.1 762.3 967.1 512 762.3 56.9 512 56.9z"/><path fill="#3fc06d" d="M728.2 335.6l51.2 51.2-335.7 341.4-199.1-199.1 51.2-51.2 147.9 142.2 284.5-284.5z"/><path fill="#e5f6ea" d="M512.1 57C260.8 56.9 57 260.6 56.9 512c0 251.4 203.8 455.1 455.1 455.1S967.1 763.4 967.1 512c-.1-251.3-203.7-454.9-455-455zm-68.4 671.2L244.6 529.1l51.2-51.2 147.9 142.2 284.4-284.4 51.2 51.2-335.6 341.3z"/></symbol><symbol id="gsekit-icon-bukejian" viewBox="0 0 1024 1024"><path d="M500.16 304a355.04 355.04 0 01128 24.8l48-48.96a426.08 426.08 0 00-176-39.84v64zM763.2 328.8l-46.08 46.08a822.24 822.24 0 01160 138.88 807.52 807.52 0 01-86.88 85.12C723.84 654.24 620.48 720 502.56 720a331.52 331.52 0 01-111.04-19.52l-49.44 49.28a402.4 402.4 0 00160 34.24C768 784 960 512 960 512a962.56 962.56 0 00-196.8-183.2zM254.88 701.12l46.08-46.08a706.56 706.56 0 01-156.64-144C197.44 442.88 328.16 304 500.16 304v-64C234.72 240 64 512 64 512a838.72 838.72 0 00190.88 189.12z"/><path d="M512 640a128 128 0 00110.24-192.96L888 181.28A32 32 0 10842.72 136L576.96 401.76a128 128 0 00-176 176L136 842.72A32 32 0 10181.28 888l265.76-265.76A128 128 0 00512 640zm64-128a64 64 0 01-64 64 60.96 60.96 0 01-16-2.4l77.6-77.6a60.96 60.96 0 012.4 16zm-64-64a60.96 60.96 0 0116 2.4L450.4 528a60.96 60.96 0 01-2.4-16 64 64 0 0164-64z"/></symbol><symbol id="gsekit-icon-kejian" viewBox="0 0 1024 1024"><path d="M512 384a128 128 0 10128 128 128 128 0 00-128-128zm0 192a64 64 0 1164-64 64 64 0 01-64 64z"/><path d="M512 240C264.64 240 64 512 64 512s200.64 272 448 272 448-272 448-272-200.64-272-448-272zm0 480c-160 0-304-139.04-364.96-208C208 442.88 352 304 512 304s304 139.04 364.96 208C816 581.12 672 720 512 720z"/></symbol><symbol id="gsekit-icon-lang-zh-cn" viewBox="0 0 1024 1024"><path d="M825.6 809.6c0 12.8-9.6 22.4-22.4 22.4H249.6c-12.8 0-22.4-9.6-22.4-22.4V483.2L96 611.2h67.2V832c0 35.2 28.8 64 64 64h598.4c35.2 0 64-28.8 64-64V550.4l-64 60.8v198.4zM227.2 214.4c0-12.8 9.6-22.4 22.4-22.4h560c12.8 0 22.4 9.6 22.4 22.4V512l131.2-137.6h-73.6V192c0-35.2-28.8-64-64-64H227.2c-35.2 0-64 28.8-64 64v252.8l64-64V214.4zM556.8 704V579.2h86.4v25.6h57.6V387.2h-144V320h-57.6v67.2H352V608h57.6v-28.8H496V704h60.8zm86.4-179.2h-86.4v-83.2h86.4v83.2zm-147.2 0h-86.4v-83.2H496v83.2z"/></symbol><symbol id="gsekit-icon-lang-en" viewBox="0 0 1024 1024"><path d="M464 425.6v-60.8H300.8V656h169.6v-60.8H368v-60.8h89.6V480H368v-54.4h96zm-236.8 57.6v329.6c0 12.8 9.6 22.4 22.4 22.4h553.6c12.8 0 22.4-9.6 22.4-22.4V611.2l64-60.8V832c0 35.2-28.8 64-64 64H227.2c-35.2 0-64-28.8-64-64V611.2H96l131.2-128zM758.4 368v291.2h-67.2L576 470.4l-3.2-3.2v195.2h-64V371.2h73.6l112 179.2 3.2 3.2V364.8h60.8zm67.2-240c35.2 0 64 28.8 64 64v182.4h73.6L828.8 512V214.4c0-12.8-9.6-22.4-22.4-22.4H249.6c-12.8 0-22.4 9.6-22.4 22.4v166.4l-64 64V192c0-35.2 28.8-64 64-64h598.4z"/></symbol></svg>'
    if (document.body) {
        document.body.insertAdjacentHTML('afterbegin', svgCode)
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.insertAdjacentHTML('afterbegin', svgCode)
        })
    }
})()