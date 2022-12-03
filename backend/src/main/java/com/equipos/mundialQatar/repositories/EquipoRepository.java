package com.equipos.mundialQatar.repositories;

import com.equipos.mundialQatar.models.EquipoModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipoRepository extends CrudRepository<EquipoModel, Long> {

}
