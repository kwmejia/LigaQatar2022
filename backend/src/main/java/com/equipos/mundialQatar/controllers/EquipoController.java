package com.equipos.mundialQatar.controllers;

import com.equipos.mundialQatar.models.EquipoModel;
import com.equipos.mundialQatar.services.EquipoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/equipos")
public class EquipoController {
    @Autowired
    EquipoService equipoService;

    @CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
    @GetMapping()
    public ArrayList<EquipoModel> obtenerEquipos(){
        return  equipoService.obtenerEquipos();
    }

    @CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
    @PostMapping()
    public EquipoModel guardarEquipo(@RequestBody EquipoModel equipo){
        return this.equipoService.guardarEquipo(equipo);
    }
}
