import { useState } from "react";
import Cursos from "./Cursos";
import Titulo from "./Titulo";
import LoginSingUp from "./login";

// Importando la biblioteca nextjs-toast-notify
import { toast } from "nextjs-toast-notify";
import "nextjs-toast-notify/dist/nextjs-toast-notify.css";

function FormularioConLista() {
  const [inputNombre, setInputNombre] = useState("");
  const [selectedCurso, setSelectedCurso] = useState("Seleccione el Curso");
  const [sexo, setSexo] = useState("masculino");
  const [hablaIngles, setHablaIngles] = useState(true);
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(false);
  const [idIndexEdit, setidIndexEdit] = useState(null);

  const handleChange = (event) => {
    setInputNombre(event.target.value);
  };

  const handleCursoChange = (event) => {
    setSelectedCurso(event.target.value);
  };

  const handleChangeSexo = (e) => {
    setSexo(e.target.value);
  };

  const handleChangeHablaIngles = () => {
    setHablaIngles(!hablaIngles);
  };

  const validateFields = () => {
    if (!inputNombre.trim()) {
      toast.error("El nombre del alumno es obligatorio.", {
        duration: 3000,
        position: "top-right",
      });
      return false;
    }

    if (selectedCurso === "Seleccione el Curso") {
      toast.error("Debe seleccionar un curso.", {
        duration: 3000,
        position: "top-right",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateFields()) return;

    const newAlumno = {
      alumno: inputNombre,
      curso: selectedCurso,
      sexo: sexo,
      hablaIngles: hablaIngles,
    };

    setItems([...items, newAlumno]);
    toast.success("¡Alumno registrado exitosamente!", {
      duration: 5000,
      position: "top-right",
    });
    setInputNombre("");
    setSelectedCurso("Seleccione el Curso");
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    toast.error("Alumno eliminado correctamente", {
      duration: 2000,
      position: "top-center",
    });
  };

  const handleEdit = (index) => {
    const selected = items[index];
    setEditIndex(true);
    setInputNombre(selected.alumno);
    setSelectedCurso(selected.curso);
    setSexo(selected.sexo);
    setHablaIngles(selected.hablaIngles);
    setidIndexEdit(index);
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();

    if (!validateFields()) return;

    const updatedItems = [...items];
    updatedItems[idIndexEdit] = {
      alumno: inputNombre,
      curso: selectedCurso,
      sexo: sexo,
      hablaIngles: hablaIngles,
    };

    setItems(updatedItems);
    setEditIndex(false);
    toast.info("¡Alumno actualizado correctamente!", {
      duration: 3000,
      position: "top-right",
    });
    setInputNombre("");
    setSelectedCurso("Seleccione el Curso");
  };

  const volver = () => {
    setEditIndex(false);
    setInputNombre("");
    setSelectedCurso("Seleccione el Curso");
  };

  return (
    <div className="container text-center mt-5 mb-5">
      <Titulo />
      <div className="row justify-content-md-center">
        <div className="col col-lg-5">
          <h1 className="mt-3 mb-5">
            {editIndex ? (
              <>
                <i
                  className="bi bi-arrow-left-circle float-start"
                  onClick={volver}
                ></i>{" "}
                Editar Alumno
              </>
            ) : (
              "Registrar Alumno"
            )}
            <hr />
          </h1>

          <form onSubmit={editIndex ? handleUpdateSubmit : handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre del Alumno</label>
              <input
                type="text"
                name="alumno"
                className="form-control"
                value={inputNombre}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Seleccione el Curso</label>
              <select
                name="cursos"
                className="form-select"
                value={selectedCurso}
                onChange={handleCursoChange}
              >
                <option disabled>Seleccione el Curso</option>
                <option value="ReactJS">ReactJS</option>
                <option value="Python">Python</option>
                <option value="NodeJS">NodeJS</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Sexo del alumno</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sexo"
                  id="masculino"
                  value="masculino"
                  checked={sexo === "masculino"}
                  onChange={handleChangeSexo}
                />
                <label className="form-check-label" htmlFor="masculino">
                  Masculino
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="sexo"
                  id="femenino"
                  value="femenino"
                  checked={sexo === "femenino"}
                  onChange={handleChangeSexo}
                />
                <label className="form-check-label" htmlFor="femenino">
                  Femenino
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">¿Hablas Ingles?</label>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="ingles"
                  checked={hablaIngles}
                  onChange={handleChangeHablaIngles}
                />
                <label className="form-check-label" htmlFor="ingles">
                  {hablaIngles ? "Sí" : "No"}
                </label>
              </div>
            </div>
            <div className="d-grid gap-2 mb-5">
              <button type="submit" className="btn btn-primary block btn_add">
                {editIndex ? "Editar " : "Registrar "} Alumno
              </button>
            </div>
          </form>
        </div>

        {/* Lista de Alumnos y su curso */}
        <Cursos
          items={items}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default FormularioConLista;
