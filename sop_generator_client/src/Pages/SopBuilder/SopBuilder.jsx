const SopBuilder = () => {
  return (
    <div className="min-h-screen hero font-noto-sans">
      <div className="w-full mb-10 md:mt-10 md:max-w-xl card md:shadow-2xl">
        <div className="bg-[#7A5CFA] text-white pt-6 p-4 text-center">
          <h1 className="mb-6 text-3xl font-bold">Customized SOP Generator</h1>
          <p className="text-[15px]">
            Fill this questionnaire for the student. After submitting, you will
            receive an email at the email address that you have provided with a
            Statement of Purpose customized for you. You can use and modify that
            as per your needs.
          </p>
        </div>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="font-bold label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-bold label-text">Full Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">Age</span>
            </label>
            <input
              name="age"
              type="number"
              placeholder="Enter age"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
              name="education"
              className="w-full max-w-xl select select-bordered"
            >
              <option className="font-bold" disabled selected>
                Highest Level of Education
              </option>
              <option value="Grade 12">Grade 12</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelors Degree">Bachelors Degree</option>
              <option value="Masters Degree">Masters Degree</option>
              <option value="Masters Degree">PhD</option>
            </select>
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">
                Institute where you completed your highest level of education
              </span>
            </label>
            <input
              name="institute"
              type="text"
              placeholder="Enter institute"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">What did you study</span>
            </label>
            <input
              name="study"
              type="text"
              placeholder="Enter field of study"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">Work Experience</span>
            </label>
            <div className="pl-2">
              <h2 className="mb-2 text-[14px]">
                Write None if no work experience. Provide the following details
                if yes:
              </h2>
              <ol className="text-[14px]">
                <li>1. Job Title </li>
                <li>2. Company Name </li>
                <li>3. Job Duties </li>
              </ol>
            </div>
            <div className="p-6 mt-4 mb-6 bg-white rounded shadow">
              <h2 className="mb-2 text-[14px] font-bold">Sales Manager</h2>
              <p className="mb-2 text-[14px] text-gray-600">
                Effizient Immigration Inc <br />
                Jan 2022 - Feb 2023
              </p>
              <p className="text-[14px] text-gray-800">
                In this role, I managed sales operations, reaching out to leads,
                led the outreach program, and ensured meeting monthly targets.
              </p>
            </div>
            <textarea
              name="experience"
              placeholder="Enter work experience"
              className="w-full max-w-xl textarea textarea-bordered textarea-lg"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">
                What institute did you get admitted to in Canada?
              </span>
            </label>
            <input
              name="institute-canada"
              type="text"
              placeholder="Enter institute in Canada"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">
                What is your program of study in Canada?
              </span>
            </label>
            <input
              name="programme-canada"
              type="text"
              placeholder="Enter programme in Canada"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">
                Which country are you applying from?
              </span>
            </label>
            <input
              name="country"
              type="text"
              placeholder="Enter country"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">What are your future goals?</span>
            </label>
            <input
              name="goals"
              type="text"
              placeholder="Enter goals"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">English Scores - Listening</span>
            </label>
            <input
              name="listening-score"
              type="number"
              placeholder="Enter listening score"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">English Scores - Reading</span>
            </label>
            <input
              name="reading-score"
              type="number"
              placeholder="Enter reading score"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">English Scores - Speaking</span>
            </label>
            <input
              name="speaking-score"
              type="number"
              placeholder="Enter speaking score"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">English Scores - Writing</span>
            </label>
            <input
              name="writing-score"
              type="number"
              placeholder="Enter writing score"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
              name="tuition-first"
              className="w-full max-w-xl select select-bordered"
            >
              <option className="font-bold" disabled selected>
                Did you pay your first year tuition?
              </option>
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">
                How much tuition fee did you pay?
              </span>
            </label>
            <input
              name="tuition-fee"
              type="text"
              placeholder="Enter tuition fee"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
              name="gic"
              className="w-full max-w-xl select select-bordered"
            >
              <option className="font-bold" disabled selected>
                Did you do a GIC?
              </option>
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="form-control">
            <label className="font-bold label">
              <span className="label-text">
                How much did you pay towards GIC?
              </span>
            </label>
            <input
              name="gic-fee"
              type="text"
              placeholder="Enter GIC fee"
              className="input input-bordered"
              required
            />
          </div>
          <div className="mt-6 form-control">
            <button className="btn bg-[#7A5CFA] text-[16px] font-normal normal-case text-white hover:bg-[#917bf2]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SopBuilder;
