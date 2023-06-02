import "./ProgressBar.css";

export default function ProgressBar({ title, color, progress}) {
  return (
    <div className="divNerio">
      <div
        className="divSamaneh"
        style={{ backgroundColor: color, height: "4rem", width: progress }}
      >

        {title} <span>{progress}</span>
      </div>
    </div>
  );
}
