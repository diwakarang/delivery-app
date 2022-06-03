import Image from "next/image";
import styles from '../../styles/IcecreamBanner.module.css';
const IcecreamBanner = () =>{
return (
    <div className={"deal flex-col-hstart-vstart".split(" ")
    .map((e) => styles[e]).reduce((a,c) => ((a + ' ' +c)),'')}>
      <div className={"group-617 flex-col-hend".split(" ")
        .map((e) => styles[e]).reduce((a,c) => ((a + ' ' +c)),'')}>
        <div className={"group-387 flex-row-vend".split(" ")
        .map((e) => styles[e]).reduce((a,c) => ((a + ' ' +c)),'')}>
          <p className={"txt-376".split(" ")
        .map((e) => styles[e]).reduce((a,c) => ((a + ' ' +c)),'')}>All deserts</p>
          <p className={"txt-219 flex-hend".split(" ")
        .map((e) => styles[e]).reduce((a,c) => ((a + ' ' +c)),'')}>Deserty</p>
        </div>
        <Image
          src="/banner1.png"
          alt="Not Found"
          className={"img-mask".split(" ")
          .map((e) => styles[e]).reduce((a,c) => ((a + ' ' +c)),'')}
        />
      </div>
      <p className={"txt-745".split(" ")
        .map((e) => styles[e]).reduce((a,c) => ((a + ' ' +c)),'')}>20% OFF</p>
    </div>
  )
}
export default IcecreamBanner;