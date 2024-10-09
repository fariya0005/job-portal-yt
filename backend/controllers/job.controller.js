

import { Job } from "../models/job.model.js"; // Ensure you're using the correct import statement
import { Application } from "../models/application.model.js"; // Adjust the path as needed


export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, vacancy, companyId } = req.body;
        const userId = req.id;

        // Check for required fields
        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !vacancy || !companyId) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            });
        }

        // Process requirements if it's a string
        const processedRequirements = Array.isArray(requirements) ? requirements : requirements.split(",");

        const job = await Job.create({
            title,
            description,
            requirements: processedRequirements,
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: Number(experience), // Ensure this is a number
            vacancy: Number(vacancy), // Assuming vacancy refers to position count
            company: companyId, // Ensure this is the correct field
            created_by: userId
        });

        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while creating the job.",
            success: false,
            error: error.message || "Internal server error."
        });
    }
}



// student k liye
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ]
        };
        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({ createdAt: -1 });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
// student
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
}
// admin kitne job create kra hai abhi tk
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}