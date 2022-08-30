import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center sm:justify-center md:justify-between px-2 py-2 bg-rose-100 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center sm:justify-center md:justify-between">
          <div className="w-full relative flex justify-between w-auto static block justify-center ">
            <div
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-grey"
              href="#pablo"
            >
              <svg
                
                className="svg-icon hidden md:block"
                width="16"
                height="16"
                aria-hidden="true"
                role="img"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -3.5 29 32"
              >
                <path d="M28.4501243,12.4 C28.4444806,18.6921406 23.342143,23.7900024 17.05,23.79 C15.5266386,23.8233305 14.0186342,23.4798216 12.66,22.79 L5,30.56 C4.41199697,31.0967002 3.65517844,31.4114519 2.86,31.45 C2.10217663,31.4281398 1.38353748,31.1083454 0.86,30.56 C-0.257531922,29.3984916 -0.257531922,27.5615084 0.86,26.4 L8,19.22 C5.00152809,15.2629568 4.91442496,9.81873792 7.78477557,5.7677983 C10.6551262,1.71685869 15.8203741,-0.0057325508 20.5476637,1.51142193 C25.2749532,3.02857642 28.4730951,7.43527534 28.4501243,12.4 Z M24,12.4 C24,8.57818953 20.9018105,5.48 17.08,5.48 C13.2581895,5.48 10.16,8.57818953 10.16,12.4 C10.16,16.2218104 13.2581896,19.3199999 17.08,19.3199999 C20.9018104,19.3199999 24,16.2218104 24,12.4 L24,12.4 Z"></path>
              </svg>
            </div>
            <div
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-grey hidden md:block"
              href="#pablo"
            >
              SEARCH MINIMALIST BAKER
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={"w-full relative flex w-auto static block justify-center flex "}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col flex-row list-none ml-auto flex-wrap items-center  ">
              <li className="nav-item">
                <a
                  className="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-grey hover:opacity-75"
                  href="#pablo"
                >
                  <svg
                    aria-label="Facebook"
                    className="svg-icon"
                    width="24"
                    height="24"
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
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-grey hover:opacity-75"
                  href="#pablo"
                >
                  <svg
                    aria-label="Instagram"
                    className="svg-icon"
                    width="24"
                    height="24"
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
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-grey hover:opacity-75"
                  href="#pablo"
                >
                  <svg
                    aria-label="Pinterest"
                    className="svg-icon"
                    width="24"
                    height="24"
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
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-grey hover:opacity-75"
                  href="#pablo"
                >
                  <svg
                    aria-label="Twitter"
                    className="svg-icon"
                    width="24"
                    height="24"
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
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-grey hover:opacity-75"
                  href="#pablo"
                >
                  <svg
                    aria-label="YouTube"
                    className="svg-icon"
                    width="24"
                    height="24"
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
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
