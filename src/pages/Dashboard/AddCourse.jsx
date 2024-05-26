import axios from "axios";
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const AddCourse = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const handleForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const image = form.image.value;

    const data = { title, price, image };
    await axios.post("http://localhost:3000/courses", data);

    console.log(data);
  };
  return (
    <div className="bg-gray-900 h-screen">
      <h1 className="text-center py-8 md:text-4xl text-white font-bold">
        Add Course
      </h1>
      <div className="w-1/2 mx-auto bg-white rounded-2xl">
        <form className="card-body">
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Course Title</span>
              </label>
              <input
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
                type="text"
                name="slogan"
                placeholder="Slogan"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
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
                type="text"
                name="off_price"
                placeholder="Discount"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                placeholder="Description"
                className="textarea textarea-bordered h-32"
                required
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class Date</span>
              </label>
              <Calendar
                value={selectedDay}
                onChange={setSelectedDay}
                shouldHighlightWeekends
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">ID No.</span>
              </label>
              <input
                type="number"
                name="id"
                placeholder="ID No."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose Photo</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-theme-1">Add Course</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
