import { NextPage } from "next";
import Image from "next/image";
import TestImage from '../images/test.png'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ImageLoader } from "next/dist/client/image-component";


type Image = {
  src: string
  alt: string
}

const ImageSample: NextPage<Image> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgダグで表示した場合</p>
      <img src="/images/test.png"/>
      <p>Image コンポーネントで表示した場合</p>
      <Image src={TestImage} alt="test"/>
      <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
    </div>
  )
}

export default ImageSample