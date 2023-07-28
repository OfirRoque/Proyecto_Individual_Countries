const validation = (activitiesData) => {
    const errors = {};
    if(!activitiesData.name){
        errors.name = "Debe poner un nombre a la actividad";
    }
    if(!activitiesData.dificulty){
        errors.dificulty = "Debe ingresar una dificultad del 1 al 5";
    }
    if(activitiesData.dificulty > 5){
        errors.dificulty = "La dificultad debe ser de 1 a 5"
    }
    if(!activitiesData.duration){
        errors.duration = "Debe ingresar cuantas hora dura la actividad"
    }
    if(activitiesData.duration > 24){
        errors.duration = "La duracion debe ser de 1 a 24 horas "
    }
    return errors;
}

export default validation;