package com.backend.consultoria;

import com.backend.consultoria.entidades.Rol;
import com.backend.consultoria.entidades.Usuario;
import com.backend.consultoria.entidades.UsuarioRol;
import com.backend.consultoria.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class SistemaConsultoriaApplication implements CommandLineRunner {


	@Autowired
	private UsuarioService usuarioService;
	public static void main(String[] args) {
		SpringApplication.run(SistemaConsultoriaApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		/*Usuario usuario = new Usuario();

		usuario.setNombre("Sergio");
		usuario.setApellido("Sierra");
		usuario.setEmail("sergio@gmail.com");
		usuario.setPassword("123456");
		usuario.setUsername("SergioS");
		usuario.setTelefono("3007389393");
		usuario.setPerfil("foto.png");

		Rol rol = new Rol();
		rol.setRolId(1L);
		rol.setNombre("ADMIN");

		Set<UsuarioRol> usuarioRols = new HashSet<>();
		UsuarioRol usuarioRol = new UsuarioRol();
		usuarioRol.setRol(rol);
		usuarioRol.setUsuario(usuario);
		usuarioRols.add(usuarioRol);

		Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario,usuarioRols);
		System.out.println(usuarioGuardado.getUsername());*/
	}
}
