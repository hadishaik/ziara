import NavigatePrev from "@/components/front-end/NavigatePrev";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray">
      <NavigatePrev />
      <div className="">
        <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 px-4 py-10 sm:px-10 lg:grid-cols-10">
          <h2 className="w-full text-3xl font-bold text-pink sm:text-4xl lg:col-span-3">
            Terms of service
          </h2>

          <div className="mr-20 text-darkGray lg:col-span-5">
            <p className="mb-1 font-medium">Summary</p>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              nobis doloribus deleniti error consectetur fugiat dignissimos ex
              iusto esse repellendus. Ipsa excepturi ex obcaecati itaque
              cupiditate ipsam deserunt fugit veritatis impedit temporibus quos
              eum molestiae minus praesentium, saepe consectetur odit asperiores
              explicabo alias, iusto illum voluptatum cumque! Magnam vel iusto
              deserunt nesciunt dolor praesentium facere voluptatibus.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium">Download</p>
            <a href="#" className="font-medium text-blue-600">
              .pdf
            </a>
          </div>
        </section>
      </div>
      <div className="">
        <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 border-b border-grayText px-4 py-10 sm:px-10 lg:grid-cols-10">
          <h2 className="w-full text-3xl font-bold text-pink sm:text-4xl lg:col-span-3">
            Privacy Policy
          </h2>

          <div className="mr-20 text-darkGray lg:col-span-5">
            <p className="mb-1 font-medium">Summary</p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              repudiandae vel consequuntur maiores pariatur veniam minima qui
              praesentium corporis, cumque aliquid in quis provident aliquam ad
              dolor saepe.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium">Download</p>
            <a href="#" className="font-medium text-blue-600">
              .pdf
            </a>
          </div>
        </section>
      </div>
      <div className="">
        <section className="mx-auto grid max-w-screen-xl gap-y-4 gap-x-20 px-4 py-10 sm:px-10 lg:grid-cols-10">
          <h2 className="w-full text-3xl font-bold text-pink sm:text-4xl lg:col-span-3">
            User Conduct
          </h2>

          <div className="mr-20 text-gray-600 lg:col-span-5">
            <p className="mb-1 font-medium">Summary</p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus cupiditate cum nostrum dolore pariatur debitis at nemo
              necessitatibus optio sequi ipsum officia quidem ab, id dolorem
              ratione minus molestias provident laudantium amet quaerat! Aut
              cumque officiis ratione aperiam incidunt atque quis quod. Ipsum
              similique consequatur soluta dolores atque repellat a vero. Labore
              deserunt, minus nostrum odit quod optio unde rem dignissimos,
              delectus vel facere culpa nihil excepturi mollitia.
            </p>
          </div>
          <div className="lg:col-span-2">
            <p className="font-medium">Download</p>
            <a href="#" className="font-medium text-blue-600">
              .pdf
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
