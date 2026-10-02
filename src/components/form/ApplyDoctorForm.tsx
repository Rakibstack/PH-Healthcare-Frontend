"use client";

import { useRef, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { FileText, Loader2, Upload, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { applyAsDoctorZodSchema } from "@/validation/doctor.validation";
import z from "zod";

const MAX_ADDITIONAL_FILES = 5;

function getFieldError(error: unknown): string | undefined {
  if (!error) return undefined;

  if (typeof error === "string") {
    return error;
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null) {
    if ("message" in error && typeof error.message === "string") {
      return error.message;
    }
  }

  return String(error);
}

export default function ApplyDoctorForm() {
  const resumeInputRef = useRef<HTMLInputElement>(null);
  const additionalFilesRef = useRef<HTMLInputElement>(null);

  const [resume, setResume] = useState<File | null>(null);
  const [additionalFiles, setAdditionalFiles] = useState<File[]>([]);

  type doctorDefaultValues = z.infer<typeof applyAsDoctorZodSchema>;

  const defaultValues: doctorDefaultValues = {
    user: {
      name: "",
      email: "",
    },
    doctor: {
      specialization: "",
      licenseNumber: "",
      qualification: "",
      experienceYears: 0,
      address: "",
      contactNumber: "",
      bio: "",
    },
  };

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: applyAsDoctorZodSchema,
    },

    onSubmit: async ({ value }) => {
      if (!resume) {
        toast.error("Please upload your resume or CV.");
        return;
      }

      const formData = new FormData();

      formData.append("data", JSON.stringify(value));

      formData.append("resume", resume);

      additionalFiles.forEach((file) => {
        formData.append("additionalFiles", file);
      });

      console.log("Application data:", value);
      console.log("Resume:", resume);
      console.log("Additional files:", additionalFiles);

      toast.success("Doctor application submitted successfully.");
    },
  });

  const handleResumeChange = (file?: File) => {
    const MAX_FILE_SIZE_MB = 5;
    if (!file) return;

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      toast.error(`File size exceeds ${MAX_FILE_SIZE_MB} MB limit.`);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/png",
      "image/jpeg",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Please upload a PDF, DOC, or DOCX resume.");
      return;
    }

    setResume(file);
  };

  const removeResume = () => {
    setResume(null);

    if (resumeInputRef.current) {
      resumeInputRef.current.value = "";
    }
  };

  const handleAdditionalFiles = (files: FileList | null) => {
    if (!files) return;

    const selectedFiles = Array.from(files);

    if (selectedFiles.length + additionalFiles.length > MAX_ADDITIONAL_FILES) {
      toast.error(
        `You can upload up to ${MAX_ADDITIONAL_FILES} additional files.`,
      );
      return;
    }

    setAdditionalFiles((previous) => [...previous, ...selectedFiles]);
  };

  const removeAdditionalFile = (index: number) => {
    setAdditionalFiles((previous) =>
      previous.filter((_, fileIndex) => fileIndex !== index),
    );
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();

        form.handleSubmit();
      }}
      className="space-y-10"
    >
      <section>
        <div className="mb-5">
          <h3 className="text-base font-semibold">Applicant information</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Enter the account information associated with this application.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Name */}

          <form.Field name="user.name">
            {(field) => {
              const error = getFieldError(field.state.meta.errors[0]);

              return (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Full name</Label>

                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="Dr. John Doe"
                  />

                  {error && <p className="text-xs text-destructive">{error}</p>}
                </div>
              );
            }}
          </form.Field>

          {/* Email */}

          <form.Field name="user.email">
            {(field) => {
              const error = getFieldError(field.state.meta.errors[0]);

              return (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Email address</Label>

                  <Input
                    id={field.name}
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="doctor@example.com"
                  />

                  {error && <p className="text-xs text-destructive">{error}</p>}
                </div>
              );
            }}
          </form.Field>
        </div>
      </section>

      {/* =========================================
          Professional Information
      ========================================== */}

      <section>
        <div className="mb-5">
          <h3 className="text-base font-semibold">Professional information</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Provide your medical qualifications and professional experience.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Specialization */}

          <form.Field name="doctor.specialization">
            {(field) => {
              const error = getFieldError(field.state.meta.errors[0]);

              return (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Specialization</Label>

                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="Cardiology"
                  />

                  {error && <p className="text-xs text-destructive">{error}</p>}
                </div>
              );
            }}
          </form.Field>

          {/* License */}

          <form.Field name="doctor.licenseNumber">
            {(field) => {
              const error = getFieldError(field.state.meta.errors[0]);

              return (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Medical license number</Label>

                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="BMDC-123456"
                  />

                  {error && <p className="text-xs text-destructive">{error}</p>}
                </div>
              );
            }}
          </form.Field>

          {/* Qualification */}

          <form.Field name="doctor.qualification">
            {(field) => {
              const error = getFieldError(field.state.meta.errors[0]);

              return (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Qualification</Label>

                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="MBBS, FCPS"
                  />

                  {error && <p className="text-xs text-destructive">{error}</p>}
                </div>
              );
            }}
          </form.Field>

          {/* Experience */}

          <form.Field name="doctor.experienceYears">
            {(field) => {
              const error = getFieldError(field.state.meta.errors[0]);

              return (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Experience (years)</Label>

                  <Input
                    id={field.name}
                    name={field.name}
                    type="number"
                    min={0}
                    max={60}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) =>
                      field.handleChange(Number(event.target.value))
                    }
                    placeholder="5"
                  />

                  {error && <p className="text-xs text-destructive">{error}</p>}
                </div>
              );
            }}
          </form.Field>
        </div>
      </section>

      {/* =========================================
          Contact Information
      ========================================== */}

      <section>
        <div className="mb-5">
          <h3 className="text-base font-semibold">Contact information</h3>

          <p className="mt-1 text-sm text-muted-foreground">
            These details can be completed or updated later after approval.
          </p>
        </div>

        <div className="space-y-5">
          {/* Contact Number */}

          <form.Field name="doctor.contactNumber">
            {(field) => {
              const error = getFieldError(field.state.meta.errors[0]);

              return (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Contact number</Label>

                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="+8801XXXXXXXXX"
                  />

                  {error && <p className="text-xs text-destructive">{error}</p>}
                </div>
              );
            }}
          </form.Field>

          {/* Address */}

          <form.Field name="doctor.address">
            {(field) => {
              const error = getFieldError(field.state.meta.errors[0]);

              return (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Address</Label>

                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="Dhaka, Bangladesh"
                  />

                  {error && <p className="text-xs text-destructive">{error}</p>}
                </div>
              );
            }}
          </form.Field>

          {/* Bio */}

          <form.Field name="doctor.bio">
            {(field) => {
              const error = getFieldError(field.state.meta.errors[0]);

              return (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Professional bio</Label>

                  <Textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    placeholder="Tell us briefly about your professional background..."
                    className="min-h-32 resize-y"
                  />

                  <div className="flex justify-end">
                    <span className="text-xs text-muted-foreground">
                      {field.state.value?.length}/1000
                    </span>
                  </div>

                  {error && <p className="text-xs text-destructive">{error}</p>}
                </div>
              );
            }}
          </form.Field>
        </div>
      </section>

      {/* =========================================
          Application Documents
      ========================================== */}

      <section>
        <div className="mb-5">
          <h3 className="text-base font-semibold">Application documents</h3>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Your resume is required. You can also provide additional supporting
            documents if needed.
          </p>
        </div>

        <div className="space-y-6">
          {/* -------------------------------------
              Resume
          -------------------------------------- */}

          <div className="space-y-3">
            <div>
              <Label>
                Resume / CV <span className="text-destructive">*</span>
              </Label>

              <p className="mt-1 text-xs text-muted-foreground">
                PDF, DOC, or DOCX
              </p>
            </div>

            <input
              ref={resumeInputRef}
              type="file"
              accept=".pdf,.doc,.docx,image/png,image/jpeg"
              className="hidden"
              onChange={(event) => {
                handleResumeChange(event.target.files?.[0]);

                event.target.value = "";
              }}
            />

            {resume ? (
              <div className="flex items-center justify-between rounded-xl border p-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileText className="size-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      {resume.name}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      {(resume.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={removeResume}
                  aria-label="Remove resume"
                  className="ml-3 flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => resumeInputRef.current?.click()}
                className="flex w-full flex-col items-center justify-center rounded-xl border border-dashed px-6 py-8 text-center transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Upload className="size-5" />
                </div>

                <p className="mt-3 text-sm font-medium">Upload your resume</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Click to browse your files
                </p>
              </button>
            )}
          </div>

          {/* -------------------------------------
              Additional Supporting Files
          -------------------------------------- */}

          <div className="space-y-3">
            <div>
              <Label>Additional supporting documents</Label>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Optional. Upload certificates, license documents, or other
                relevant files. You can select multiple files.
              </p>
            </div>

            <input
              ref={additionalFilesRef}
              type="file"
              multiple
              className="hidden"
              onChange={(event) => {
                handleAdditionalFiles(event.target.files);

                event.target.value = "";
              }}
            />

            <button
              type="button"
              onClick={() => additionalFilesRef.current?.click()}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed px-6 py-7 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <Upload className="size-4" />
              Add supporting files
            </button>

            {additionalFiles.length > 0 && (
              <div className="space-y-2">
                {additionalFiles.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex items-center justify-between rounded-xl border p-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                        <FileText className="size-4 text-muted-foreground" />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                          {file.name}
                        </p>

                        <p className="text-xs text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeAdditionalFile(index)}
                      aria-label={`Remove ${file.name}`}
                      className="ml-3 flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          Submit
      ========================================== */}

      <div className="border-t pt-6">
        <Button
          type="submit"
          size="lg"
          className="h-11 w-full"
          disabled={form.state.isSubmitting}
        >
          {form.state.isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting application...
            </>
          ) : (
            "Submit application"
          )}
        </Button>

        <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
          Your application will be reviewed by our administration team before
          you can continue as a doctor.
        </p>
      </div>
    </form>
  );
}
