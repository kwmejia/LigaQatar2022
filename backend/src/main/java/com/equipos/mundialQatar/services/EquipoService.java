package com.equipos.mundialQatar.services;

import com.equipos.mundialQatar.models.EquipoModel;
import com.equipos.mundialQatar.repositories.EquipoRepository;
import org.springframework.data.domain.Sort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;

@Service
public class EquipoService  {
    @Autowired
    EquipoRepository equipoRepository;

    public ArrayList<EquipoModel> obtenerEquipos(){
        return (ArrayList<EquipoModel>) equipoRepository.findAll();
    }

    public EquipoModel guardarEquipo(EquipoModel equipo){
        return equipoRepository.save(equipo);
    }
}
