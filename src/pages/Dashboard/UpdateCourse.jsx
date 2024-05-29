import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { useState } from "react";
import axios from "axios";

const UpdateCourse = () => {
  const course = useLoaderData();

  const [title, setTitle] = useState(course.title);
  const [slogan, setSlogan] = useState(course.slogan);
  const [price, setPrice] = useState(course.price);
  const [off_price, setOff_price] = useState(course.off_price);
  const [id, setId] = useState(course.id);
  const [date, setDate] = useState(course.date);
  const [description, setDescription] = useState(course.description);
  const [image, setImage] = useState(course.image);

  const handleForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const slogan = form.slogan.value;
    const price = form.price.value;
    const off_price = form.off_price.value;
    const id = form.id.value;
    const date = form.date.value;
    const description = form.description.value;
    const image = form.image.value;

    const data = {
      title,
      slogan,
      price,
      off_price,
      id,
      description,
      date,
      image,
    };

    await fetch(`http://localhost:3000/courses/${course.id}`)
    console.log(course)
  };

  return (
    <div className="bg-gray-900 h-screen">
      <SectionTitle title="Update Course" />
      <div className="flex justify-center py-20">
        <div className="lg:w-1/2 mx-auto bg-white rounded-2xl">
          <form onSubmit={handleForm} className="card-body">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Course Title</span>
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  name="title"
                  placeholder="Course Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Slogan</span>
                </label>
                <input
                  value={slogan}
                  onChange={(e) => setSlogan(e.target.value)}
                  type="text"
                  name="slogan"
                  placeholder="Slogan"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Discount</span>
                </label>
                <input
                  value={off_price}
                  onChange={(e) => setOff_price(e.target.value)}
                  type="text"
                  name="off_price"
                  placeholder="Discount"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ID No.</span>
                </label>
                <input
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  type="number"
                  name="id"
                  placeholder="ID No."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Date</span>
                </label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  name="date"
                  placeholder="Class Date"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="Description"
                  className="textarea textarea-bordered h-32"
                  required
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="url"
                  name="image"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6 ">
              <button className="btn text-white bg-theme-1">Add Course</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourse;
