import React from "react";

export default function FooterSocialMedia() {
  return (
    <footer
      className="text-center text-gray-800"
      style={{ backgroundColor: "#fbf8f3" }}
    >
      <div className="container pt-10 flex justify-center items-center max-w-screen-lg">
        <div className="container pt-10 justify-between flex flex-col md:flex-row justify-center items-center border-2 border-black/[0] border-b-black">
          <div >
            <div className="md:py-3 md:py-0 md:px-4 md:text-xl">
              <ul className="flex flex-row gap-3 flex-wrap items-left mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <h1>FIND US</h1>
                </li>
                <li>
                  <svg
                    aria-label="Facebook"
                    className="svg-icon"
                    width="16"
                    height="16"
                    role="img"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m13.6651845 22h-4.44419739v-9.4441974h-2.22098711v-3.6382837h2.22098711v-2.18430414c0-2.96687416 1.25389059-4.73321476 4.81547349-4.73321476h2.9668742v3.63939529h-1.8530458c-1.3872832 0-1.4795464.50911516-1.4795464 1.45731436l-.0055581 1.82080925h3.3592708l-.3935082 3.6382837h-2.9657626z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </li>

                <li>
                  <svg
                    aria-label="Instagram"
                    className="svg-icon"
                    width="16"
                    height="16"
                    role="img"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m15.9795893 2c3.3197138 0 6.0204107 2.63061431 6.0204107 5.86397331v8.27205339c0 3.2334194-2.7006969 5.8639733-6.0204107 5.8639733h-7.95911661c-3.3197138 0-6.02047269-2.6305539-6.02047269-5.8639733v-8.27205339c0-3.233359 2.70075889-5.86397331 6.02047269-5.86397331zm3.8464114 14.1360267v-8.27205339c0-2.06579404-1.7254849-3.74642572-3.8464114-3.74642572h-7.95911661c-2.12092654 0-3.84641138 1.68063168-3.84641138 3.74642572v8.27205339c0 2.065794 1.72548484 3.7464257 3.84641138 3.7464257h7.95911661c2.1209265 0 3.8464114-1.6806317 3.8464114-3.7464257zm-7.7872191-9.71903318c1.7590273.05000227 3.2260924.63499253 4.2424731 1.69186407.9658499 1.00427253 1.4580749 2.35034801 1.4235404 3.89256761-.0331704 1.4772408-.6321611 2.8611803-1.6865482 3.8968552-1.0711275 1.0521612-2.49814 1.631656-4.0182159 1.631656-3.1457393 0-5.70501215-2.4927457-5.70501215-5.5567734 0-3.11813635 2.58940529-5.64602862 5.74376275-5.55616948zm3.0093993 5.52790738c.0133302-.5939279-.0983954-1.4346664-.7062522-2.06669989-.5216755-.54247626-1.3448613-.84472425-2.3806483-.87419419-.0279004-.00078506-.0556148-.00114739-.0832672-.00114739-.7714771 0-1.5014136.3083473-2.05545356.86821565-.56123208.56723582-.87036853 1.31376722-.87036853 2.10208792 0 1.6369099 1.36724369 2.9686127 3.04783989 2.9686127 1.6715441 0 3.0105154-1.3163639 3.0481499-2.9968748zm2.3423193-6.43826866c.6779798 0 1.2275557.53528995 1.2275557 1.19564594 0 .66029561-.5495759 1.19558555-1.2275557 1.19558555-.6779797 0-1.2275557-.53528994-1.2275557-1.19558555 0-.66035599.549576-1.19564594 1.2275557-1.19564594z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-label="Pinterest"
                    className="svg-icon"
                    width="16"
                    height="16"
                    role="img"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m10.7636728 15.2276266c-.5559411 2.7526724-1.23411875 5.3925111-3.24279389 6.7723734-.62058542-4.1619185.91089715-7.2871772 1.62198461-10.6051936-1.21178705-1.92992661.14574354-5.81211152 2.70213238-4.85537567 3.1452397 1.17652652-2.72446405 7.17199287 1.2164884 7.92186687 4.1137291.7816085 5.7933059-6.75004175 3.2427939-9.19947359-3.6859013-3.53663166-10.73095618-.08109923-9.86472237 4.98231359.21156321 1.2388201 1.56321706 1.6137572.54066154 3.3227178-2.35892979-.4948229-3.0641405-2.2543236-2.9724631-4.6003245.14574354-3.83869692 3.64829002-6.52672504 7.16141463-6.89931136 4.4428275-.47014047 8.6129734 1.54323608 9.1888955 5.49476671.6476185 4.46045765-2.0051491 9.29115095-6.7570939 8.94324705-1.2870095-.0952035-1.8276711-.6981586-2.8372977-1.2776067"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-label="Twitter"
                    className="svg-icon"
                    width="16"
                    height="16"
                    role="img"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m23 5.13129063c-.8091103.36104923-1.679229.60508251-2.5923535.71609765.9321271-.56307678 1.6472246-1.45319816 1.9842706-2.51434286-.8731191.52107105-1.8372506.8991226-2.8663909 1.10215029-.8231122-.88312043-1.9952721-1.43519571-3.2944492-1.43519571-2.49334 0-4.5136155 2.03527754-4.5136155 4.54461972 0 .35704869.0400054.70309588.1170159 1.03614129-3.7505114-.18902577-7.07696501-1.99827249-9.30226846-4.7476474-.38905306.67009137-.61108333 1.45119789-.61108333 2.28431149 0 1.57621494.79710869 2.96740465 2.00727372 3.78151566-.74010093-.02400327-1.43519571-.22803109-2.04427877-.56807746v.05800791c0 2.20130019 1.55521208 4.03755059 3.62149384 4.45560759-.37905169.103014-.77710597.1600218-1.18916216.1600218-.29103968 0-.57407828-.0290039-.84911579-.0830113.57407829 1.8052462 2.24130564 3.1194254 4.21557486 3.1564304-1.54421058 1.2191663-3.49047598 1.9452653-5.60576443 1.9452653-.36404964 0-.72409874-.022003-1.07714688-.0630086 1.99727236 1.2891758 4.36959585 2.0412783 6.91894349 2.0412783 8.30213211 0 12.84175111-6.9249443 12.84175111-12.92976311 0-.19702686-.0050006-.39205346-.0130017-.58708005.8821203-.64108742 1.6472246-1.44119653 2.2523071-2.35232077z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    aria-label="YouTube"
                    className="svg-icon"
                    width="16"
                    height="16"
                    role="img"
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m22.4882055 10.2422055c-.0076233-.42186988-.0409932-.95521235-.0993904-1.59959591-.058685-.64467123-.142685-1.22087671-.252-1.72861644-.1249932-.57016438-.3965548-1.05071918-.8143973-1.44137671-.4179863-.39065754-.9042945-.61719863-1.4592123-.67976712-1.7345137-.19518494-4.3554863-.29284932-7.8632055-.29284932-3.50771918 0-6.12883562.09766438-7.86320548.29284932-.55477397.06256849-1.03921233.28910958-1.45317123.67976712-.41410274.3905137-.68365069.87106849-.80864384 1.44137671-.11708219.50788356-.20510959 1.08408904-.26365068 1.72861644-.0585411.64438356-.09176713 1.17758219-.09953425 1.59959591-.00791096.4218698-.01179452 1.0077123-.01179452 1.757815 0 .749959.00388356 1.3359453.01179452 1.7578151.00776712.4220137.04099315.9552123.09953425 1.5995959.05854109.6446712.14254109 1.2208767.252 1.7286164.12499315.5703083.39641096 1.0508631.81439726 1.4413768s.90443835.6171986 1.45906849.6796232c1.73436986.1953288 4.35534247.2929932 7.86320548.2929932 3.5080068 0 6.1286918-.0976644 7.8632055-.2929932.554774-.0624246 1.0392123-.2891095 1.453315-.6796232.4141028-.3905137.6835069-.8712124.8085-1.4413768.1170822-.5077397.2051096-1.084089.2637946-1.7286164.0583972-.6443836.0916233-1.177726.0993904-1.5995959.0079109-.4218698.0117945-1.0078561.0117945-1.7578151 0-.7501027-.0038836-1.3359452-.0117945-1.757815zm-6.3396987 2.3906918-5.9999589 3.7497945c-.1094589.0781027-.24236297.1170822-.39856845.1170822-.11708219 0-.23819178-.0312124-.36318493-.093637-.25775342-.1406712-.38663014-.3593014-.38663014-.6561781v-7.49987671c0-.29673287.12887672-.51550685.38663014-.65617808.26566438-.14081507.51953425-.13290411.76175338.02344521l5.9999589 3.74993838c.2343083.1326164.3513905.3436233.3513905.6327328 0 .2891096-.1170822.5001165-.3513905.6328768z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:pb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 119 119"
            >
              <g fill="none">
                <circle cx="59.17" cy="59.17" r="59.17" fill="#2A2B2A" />
                <path
                  fill="#FFF"
                  d="M85.55,63.22 C88.3682963,63.210513 91.0517468,62.0122198 92.94,59.92 C96.67,55.28 95.77,49.38 91.72,45.12 C89.18,42.21 85.59,40.94 82.6,40.2 C79.9586688,39.5322899 77.2444181,39.1963677 74.52,39.2 C73.17,39.2 71.68,39.28 70.18,39.43 C68.4835047,39.5913555 66.8080555,39.9264454 65.18,40.43 C66,37.89 66.54,36.22 66.58,36.12 C67.76,32.48 67.58,29.69 66.07,27.91 C63.62,25.12 59.07,25.91 57.31,27.17 C55.4225958,28.3739084 53.9388849,30.1153531 53.05,32.17 C53.1732893,30.6539729 52.6833838,29.1518363 51.69,28 C49.3,25.21 44.69,25.95 42.99,27.27 C41.0513483,28.5096515 39.5263782,30.2992283 38.61,32.41 C38.7983519,30.8505 38.3393512,29.2819463 37.34,28.07 C36.8040126,27.4492572 36.1143141,26.9802622 35.34,26.71 C34.2115082,26.3184222 33.0244736,26.122274 31.83,26.13 C27.48,26.13 24.16,28.9 24.17,31.94 C24.1064644,32.6699775 24.34572,33.3939867 24.8317019,33.942371 C25.3176839,34.4907554 26.0076786,34.8153164 26.74,34.84 C28.1041433,34.84 29.21,33.7341433 29.21,32.37 C29.21,31.0058567 28.1041433,29.9 26.74,29.9 C26.1793494,29.8945904 25.6344984,30.0856421 25.2,30.44 C25.7988702,29.1862014 26.8279504,28.1890583 28.1,27.63 C30.1,27.03 33.58,27.91 31.99,32.63 C31.82,33.16 23.71,57.63 23.24,58.99 C22.07,62.62 22.02,65.54 23.76,67.26 C25.8324036,69.1033938 28.9386254,69.1628024 31.08,67.4 C31.2,67.28 30.9,66.93 30.72,67.05 C29.36,67.95 27.72,66.65 28.57,64.5 C28.74,64.02 37.44,37.72 37.9,36.29 C38.02,35.87 38.14,35.52 38.2,35.22 C39.79,30.98 41.74,28.41 44.2,27.45 C45.68,27.03 47.95,27.91 46.42,32.56 C46.25,33.1 38.14,57.56 37.67,58.92 C36.44,62.56 36.45,65.47 38.18,67.19 C40.2285782,69.0416044 43.3267905,69.105529 45.45,67.34 C45.63,67.22 45.27,66.86 45.15,66.98 C43.78,67.88 42.15,66.58 43,64.43 C43.17,63.96 51.8,37.66 52.33,36.23 C52.51,35.57 52.69,35.03 52.8,34.44 C54.33,30.62 56.23,28.29 58.55,27.44 C59.97,27.01 62.24,27.9 60.71,32.55 C60.71,32.66 58.47,39.25 56.12,46.2 L55.25,48.79 C54.62,50.67 54,52.51 53.42,54.2 L52.4,57 C51.4,59.94 50.7,62 50.6,62.32 C47.25,72.58 52.94,79.16 61.51,78.71 C61.51,78.71 54.72,78.32 56.05,69.15 C56.05,68.91 56.65,67.07 57.51,64.36 C58.458342,64.7680409 59.4777017,64.9855043 60.51,65 C62.9931312,64.9755405 65.2364603,63.5124998 66.26,61.25 L66.26,61 C66.3817375,60.8503221 66.4611566,60.6707657 66.49,60.48 L66.41,60.4 C66.49,60.33 66.49,60.18 66.49,60.03 C66.4953968,59.1752743 66.1575571,58.3541361 65.5522235,57.7506824 C64.9468898,57.1472287 64.1247048,56.8119446 63.27,56.82 C61.5379983,56.8690622 60.1708009,58.3077471 60.21,60.04 C60.260141,61.7244396 61.5968463,63.0872694 63.28,63.17 C63.35,63.17 63.5,63.1 63.58,63.1 C62.6765091,63.7264447 61.6091176,64.0741292 60.51,64.1 C59.5690422,64.0937729 58.6395535,63.8928944 57.78,63.51 C59.73,57.33 62.89,47.51 64.84,41.45 C66.6005262,40.8619651 68.4222423,40.4761504 70.27,40.3 C71.76,40.15 73.19,40.08 74.53,40.07 C75.2,40.07 75.88,40.15 76.7,40.14 C85.15,41.14 88.82,47.6 87.19,54.33 C86,59.49 82.94,61.67 79.65,61.67 C79.27,61.67 79.05,61.6 78.75,61.6 C79.75,58.76 80.46,56.51 80.84,55.54 C82.4,50.98 82.39,47.24 80.15,45.22 C77.08,42.16 72.37,43.29 70.95,44.94 C70.73,45.16 71.1,45.46 71.25,45.39 C73.12,44.26 75.14,45.9 74.17,48.6 C73.72,49.5 62.78,81.36 62.26,82.49 C59.49,89 54.57,94.15 49,91.09 C47.0668213,89.9218332 45.8953897,87.8185809 45.92,85.56 C45.9151012,84.4683939 46.1723067,83.3915602 46.67,82.42 C47.5992761,80.3441156 49.697323,79.0417431 51.97,79.13 L52.42,79.13 C51.4281017,79.7045793 50.8067764,80.7540128 50.78,81.9 C50.7620248,83.474377 51.8851902,84.8308681 53.4352857,85.1068931 C54.9853813,85.3829182 56.5077596,84.4975183 57.0343543,83.013711 C57.5609491,81.5299037 56.9373086,79.882894 55.56,79.12 C54.4471032,78.5527984 53.2189679,78.2483304 51.97,78.23 C49.4023965,78.1762275 47.0467948,79.6484785 45.97,81.98 C45.3612203,83.0806621 45.0283794,84.3125166 45,85.57 C45.0553438,88.3198218 46.5825662,90.8282847 49,92.14 C52.179452,94.0358968 55.9445644,94.6978163 59.58,94 C62.2222322,93.3999211 64.6457265,92.0773856 66.58,90.18 C67.9372004,92.0697265 69.9790303,93.3543928 72.27,93.76 C72.7593218,93.893534 73.2571283,93.9937635 73.76,94.06 L73.91,94.13 C81.69,95.39 88.19,93.21 91.77,87 C95.05,81.46 95.04,74.21 92.19,69.5 C90.7202441,66.73895 88.3886084,64.5337283 85.55,63.22 Z M84.31,83 C81.4,90.78 77,93.48 72.31,93 C70.2056514,92.567463 68.3518009,91.3339531 67.14,89.56 C69.045489,87.5922761 70.5201502,85.2491655 71.47,82.68 C73.18,78.68 76.23,69.36 78.47,62.56 C79.5949122,62.7921298 80.6961842,63.1268629 81.76,63.56 C86.38,66.74 88,73.39 84.31,83 Z"
                />
              </g>
            </svg>
          </div>

          <div className="flex flex-col font-bold inline-grid space-y-1 pb-9">
            <span className="flex mt-5">
              Simple Recipes That
            </span>
            <span className="flex">
              Make You Feel Good
            </span>
          </div>
        </div>
       
      </div>
      
    </footer>
  );
}