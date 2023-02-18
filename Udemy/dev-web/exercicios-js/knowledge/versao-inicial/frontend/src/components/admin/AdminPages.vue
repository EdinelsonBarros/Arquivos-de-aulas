<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do sistema" sub="Cadastros & Cia" />
        <div class="admin-pages-tab">
            <b-card no-bady>
                <b-tabs card>
                    <b-tab title="Artigos" active>
                        <ArcticleAdmin />
                    </b-tab>
                    <b-tab title="Categorias">
                       <CategoryAdmin />
                    </b-tab>
                    <b-tab title="Usuários">
                        <UserAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ArcticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
    name: 'AdminPages',
    components: { PageTitle, ArcticleAdmin, CategoryAdmin, UserAdmin }    
}
</script>

<style>

</style>