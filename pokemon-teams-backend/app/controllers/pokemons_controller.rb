class PokemonsController < ApplicationController
    def index
        pokemons = Pokemon.all
        render json: pokemons, except: [:created_at, :updated_at]
    end

    def show
        pokemon = Pokemon.find_by(id: params[:id])
        if pokemon
            render json: pokemon, except: [:created_at, :updated_at]
        else
            render json: { message: 'Pokemon not found.'}
        end
    end

end
