import Button from "@components/Button";
import { APP_CONFIG } from "@config/appConfig";
import React from "react";

export default function Home() {
  const { title, subTitle, description } = APP_CONFIG.homePageConfig;

  const renderDetailsSection = () => {
    return (
      <div className="flex w-3/5 flex-col p-10 justify-center text-center text-wrap">
        <h2 className="text-5xl text-black font-extrabold mb-1">
          {title.toUpperCase()}
        </h2>
        <h3 className="text-5xl text-white font-extrabold mb-4">
          {subTitle.toUpperCase()}
        </h3>
        <h4 className="text-white text-lg">{description}</h4>

        <div className="my-10">
          <Button
            variant="outlined"
            className="button-outline-inverted rounded-full px-4"
          >
            Contact Support
          </Button>
          <Button
            variant="contained"
            className="button-contained-inverted rounded-full px-8"
          >
            Try For Free
          </Button>
        </div>
      </div>
    );
  };

  return (
    <section className="p-6 background-primary flex h-full flex-1 justify-center text-center">
      {renderDetailsSection()}
      <figure className="flex w-2/5 mr-10 justify-center align-center">
        <img
          alt="creative"
          src="https://ik.imagekit.io/efnbfldkm/SQL%20Query%20runner/illustration.svg?updatedAt=1716229632968"
        />
      </figure>
    </section>
  );
}
