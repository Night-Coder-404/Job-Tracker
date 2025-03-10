import { useEffect } from "react";
import Card from "../components/card/Card";
import { useNavigate } from "react-router";
import { Job } from "../types";

export default function JobsPage() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  let navigate = useNavigate();
  let jobs: Job[] = [];

  useEffect(() => {
    if (!localStorage.token) {
      navigate("/login");
    }

    async function fetchJobs() {
      const response = await fetch(`${BACKEND_URL}/jobs`, {
        headers: {
          Authorization: "Bearer " + localStorage.token
        }
      })

      if (!response.ok) {
        navigate("/login");
      }

      jobs = await response.json();
    }
    fetchJobs();
  }, [])

  return (
    <div className="container mx-auto bg-base-200">
      {/* display jobs card data */}
      {jobs.map(() => (
        <Card jobId="id" jobTitle="jobTitle" company="company" status="status" appliedDate={new Date()} userId="userId"/>
      ))}
    </div>
  );
}
