import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" center />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur, quisquam illum ullam ad amet rem officia commodi vero
              et ab soluta laborum maiores voluptas labore quibusdam nisi
              doloremque consequatur? Ipsam corporis aut dolor doloremque
              excepturi consectetur molestias nostrum nisi rem?
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur, quisquam illum ullam ad amet rem officia commodi vero
              et ab soluta laborum maiores voluptas labore quibusdam nisi
              doloremque consequatur?
            </p>
            <button
              className="main-link"
              type="button"
              style={{ margin: "2rem 0 0 2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
