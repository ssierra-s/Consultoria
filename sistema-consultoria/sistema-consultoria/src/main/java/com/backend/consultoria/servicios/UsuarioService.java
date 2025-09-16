package com.backend.consultoria.servicios;

import com.backend.consultoria.entidades.Usuario;
import com.backend.consultoria.entidades.UsuarioRol;

import java.util.Set;

public interface UsuarioService {
    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;
    public Usuario obtenerUsuario(String ussername);
    public void eliminarUsuario(Long usuarioId);
}
