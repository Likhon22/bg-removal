import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="grid grid-cols-3 items-center gap-4 mt-16 xl:mt-24 justify-center">
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-md hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.upload_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Upload image</p>
            <p className="text-sm text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Exercitationem, laborum esse, enim possimus iure iusto eaque nisi
              quia, veritatis neque illum eum mollitia! Cum, provident. Dolore
              molestias consequuntur cupiditate. Incidunt!
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-md hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.remove_bg_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Remove background</p>
            <p className="text-sm text-neutral-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas ab
              cum, ducimus esse dolorum saepe, animi ea sapiente assumenda, sed
              quod enim! Exercitationem distinctio similique vel odio eveniet
              quisquam veniam.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded-md hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.download_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Download image</p>
            <p className="text-sm text-neutral-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              sed odio mollitia molestiae unde perferendis cupiditate ut impedit
              quasi suscipit laudantium excepturi, facere veritatis incidunt
              officiis quas, maxime asperiores consequuntur!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
