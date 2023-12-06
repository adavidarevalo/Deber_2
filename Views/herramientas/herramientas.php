<?php require_once('../html/head2.php') ?>


<div class="row">

    <div class="col-lg-8 d-flex align-items-stretch">
        <div class="card w-100">
            <div class="card-body p-4">
                <h5 class="card-title fw-semibold mb-4">Lista de Herramientas</h5>

                <div class="table-responsive">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_usuario">
                        Nueva Herramienta
                    </button>
                    <table class="table text-nowrap mb-0 align-middle">
                        <thead class="text-dark fs-4">
                            <tr>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">#</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Nombre</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Precio</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Cantidad</h6>
                                </th>
                                 <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Categoría</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Descripcion</h6>
                                </th>
                                <th class="border-bottom-0">
                                    <h6 class="fw-semibold mb-0">Opciones</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tabla_herramientas">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="Modal_usuario" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="post" id="form_herramientas">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Herramienta</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="Nombre">Nombre</label>
                        <input type="text" required class="form-control" id="Nombre" name="Nombre" placeholder="Nombre del Herramienta" required>
                    </div>
                     <div class="form-group">
                        <label for="Precio">Precio</label>
                        <input type="number"  min="0" required class="form-control" id="Precio" name="Precio" placeholder="Precio del Herramienta" required>
                    </div>

                    <div class="form-group">
                        <label for="Cantidad">Cantidad</label>
                        <input type="number" min="0" step="1" class="form-control" id="Cantidad" name="Cantidad" placeholder="Cantidad del Herramienta" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="Categoria">Categoria</label>
                        <select name="Categoria" id="Categoria" class="form-control">
                            <option value="Herramientas manuales">Herramientas manuales</option>
                            <option value="Herramientas eléctricas">Herramientas eléctricas</option>
                            <option value="Herramientas de corte">Herramientas de corte</option>
                        </select>
                    </div>

                     <div class="form-group">
                        <label for="Descripcion">Descripción</label>
                        <input type="text" class="form-control" id="Descripcion" name="Descripcion" placeholder="Descripcion del Herramienta">
                    </div>
                 

                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Grabar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php require_once('../html/script2.php') ?>

<script src="herramientas.controller.js"></script>
<script src="herramientas.model.js"></script>