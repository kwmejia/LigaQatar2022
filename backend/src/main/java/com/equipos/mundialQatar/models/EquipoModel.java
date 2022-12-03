package com.equipos.mundialQatar.models;

import javax.persistence.*;

@Entity
@Table(name = "equipo")
public class EquipoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String nombre;
    private String bandera_img;
    private Integer partidos_jugados;
    private Integer partidos_ganados;
    private Integer partidos_perdidos;
    private Integer partidos_empatados;
    private Integer puntos;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getBandera_img() {
        return bandera_img;
    }

    public void setBandera_img(String bandera_img) {
        this.bandera_img = bandera_img;
    }

    public Integer getPartidos_jugados() {
        return partidos_jugados;
    }

    public void setPartidos_jugados(Integer partidos_jugados) {
        this.partidos_jugados = partidos_jugados;
    }

    public Integer getPartidos_ganados() {
        return partidos_ganados;
    }

    public void setPartidos_ganados(Integer partidos_ganados) {
        this.partidos_ganados = partidos_ganados;
    }

    public Integer getPartidos_perdidos() {
        return partidos_perdidos;
    }

    public void setPartidos_perdidos(Integer partidos_perdidos) {
        this.partidos_perdidos = partidos_perdidos;
    }

    public Integer getPartidos_empatados() {
        return partidos_empatados;
    }

    public void setPartidos_empatados(Integer partidos_empatados) {
        this.partidos_empatados = partidos_empatados;
    }

    public Integer getPuntos() {
        return puntos;
    }

    public void setPuntos(Integer puntos) {
        this.puntos = puntos;
    }

    @Override
    public String toString() {
        return "EquipoModel{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", bandera_img='" + bandera_img + '\'' +
                ", partidos_jugados=" + partidos_jugados +
                ", partidos_ganados=" + partidos_ganados +
                ", partidos_perdidos=" + partidos_perdidos +
                ", partidos_empatados=" + partidos_empatados +
                ", puntos=" + puntos +
                '}';
    }
}
