import s from "./Header.module.scss";
import { GoPlus } from "react-icons/go";
import { MdLogin } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

export const Header = () => {
  return (
    <header className={s.Header}>
      <div className={s.LogoWrap}>
        <a href="https://www.gup.ua/">
          <img
            ng-src="https://www.gup.ua/images/logo-ua-razom.svg"
            ng-attr-alt="{{'LOGO_ALT' | translate}}"
            src="https://www.gup.ua/images/logo-ua-razom.svg"
            alt="Лого порталу GUP: сервіс прокату і оренди"
            className={s.Logo}
          />
        </a>
      </div>

      <p>Портал оренди та прокату товарів та послуг</p>
      <button type="button" className={s.BtnRental}>
        Здати в оренду <GoPlus />
      </button>
      <button type="button" className={s.BtnSign}>
        <MdLogin className={s.SignIcon} />
        Увійти
      </button>
      <div className={s.Divider} />
      <button type="button" className={s.BtnOpt}>
        ua
        <RiArrowDownSLine className={s.ArrowIcon} />
      </button>
      <button type="button" className={s.BtnOpt}>
        грн
        <RiArrowDownSLine className={s.ArrowIcon} />
      </button>
    </header>
  );
};
